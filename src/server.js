require("dotenv").config();
const FormData = require("form-data");
const cors = require("cors");
const express = require("express");
const crypto = require("crypto");

const axios = require("./services/api");
const file = require("./modules/saveFile");
const cryptography = require("./modules/cryptography");

const app = express();

async function _generateData() {
  try {
    const { data } = await axios.get(
      `/generate-data?token=${process.env.TOKEN}`
    );

    /**
     * 1 - Você deve usar o número de casas para decifrar o texto
     */
    const decrypted = cryptography.encrypt(data.cifrado, data.numero_casas);

    /**
     * 2 - Gerar um resumo criptográfico do texto decifrado usando o algoritmo sha1
     */
    const hash = crypto
      .createHash("sha1")
      .update(decrypted)
      .digest("hex");

    /**
     * 3 - Atualizar o arquivo JSON, no campo decifrado.
     */
    data.decifrado = decrypted;
    data.resumo_criptografico = hash;

    file.save("answer", data);

    return data;
  } catch (e) {
    console.log({ error: e.message });
  }
}

async function _submitSolution() {
  /**
   * 4 - O programa deve submeter o arquivo atualizado para correção via POST
   */
  const that = this;
  this.data;

  try {
    const url = `/submit-solution?token=${process.env.TOKEN}`;
    const submit = file.read("answer");

    const form = new FormData();

    form.append("answer", submit);

    axios
      .post(url, form, { headers: form.getHeaders() })
      .then(({ data }) => (that.data = data))
      .catch(error => console.log(error));

    return this.data;
  } catch (e) {
    console.log({ error: e.message });
  }
}

app.get("/", async function(req, res) {
  await _generateData();
  const response = await _submitSolution();

  res.status(200).json(response);
});

app.use(cors());

const port = 3333;
app.listen({ port }, () =>
  console.info("❤ server this my love online...", `http://localhost:${port}`)
);

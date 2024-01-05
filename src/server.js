import "reflect-metadata"
import app from "./App.js";

const PORT = process.env.PORT || 3330;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

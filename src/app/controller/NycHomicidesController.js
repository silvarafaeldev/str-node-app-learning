import NycHomicidesRepository from "../repositories/NycHomicidesRepository.js";

class NycHomicidesController {
  async showNycHomicides(_, res) {
    try {
      const result = await NycHomicidesRepository.findAllHomicidesPoints();
      if (result.length > 0) res.status(200).json(result);
      else res.status(404).json({ message: "Nothing found to display." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }

  async showNycHomicidesByBoroname(req, res) {
    try {
      const result =
        await NycHomicidesRepository.findAllHomicidesPointsByBoroname(
          req.params.boroname
        );
      if (result.length > 0) res.status(200).json(result);
      else res.status(404).json({ message: "Nothing found to display." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }

  async deleteHomicideByGid(req, res) {
    try {
      let gid = req.params.gid;
      const homicide = await NycHomicidesRepository.findHomicideByGid(gid);
      if (homicide.length) {
        await NycHomicidesRepository.deleteHomicideByGid(gid);
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Homicide not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during execution.", error: error });
    }
  }
}

export default new NycHomicidesController();

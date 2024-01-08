import { operation } from "../connection/connection.js";

class NycHomicidesRepository {
  async findAllHomicidesPoints() {
    const sql =
      "SELECT gid, boroname, weapon, year, st_x(geom), st_y(geom) FROM nyc_homicides";
    return await operation(sql);
  }

  async findAllHomicidesPointsByBoroname(boroname) {
    const sql =
      "SELECT gid, weapon, year, ST_X(geom), ST_Y(geom) FROM nyc_homicides WHERE nyc_homicides.boroname = $1 ORDER BY year DESC";
    return await operation(sql, [boroname]);
  }

  async findHomicideByGid(gid) {
    const sql = "SELECT * FROM nyc_homicides WHERE gid = $1"
    return await operation(sql, [gid])
  }

  async deleteHomicideByGid(gid) {
    const sql = "DELETE FROM nyc_homicides WHERE gid = $1";
    return await operation(sql, [gid]);
  }
}

export default new NycHomicidesRepository();

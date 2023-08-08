import fs from "fs";
import path from "path";
import { ServerResponse, IncomingMessage } from "http";

export const getCity = (req: IncomingMessage, res: ServerResponse) => {
    return fs.readFile(
      path.join(__dirname, "../cities.json"),
      "utf8",
      (err, data) => {
        // Read the store.json file
        // Check out any errors
        if (err) {
          // error, send an error message
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: false,
              error: err,
            })
          );
        } else {
          // no error, send the data
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: true,
              message: JSON.parse(data),
            })
          );
        }
      }
    );
 };
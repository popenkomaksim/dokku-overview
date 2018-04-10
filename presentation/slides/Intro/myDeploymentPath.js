import React from "react";
import {Heading, List, ListItem, Slide, Text, S, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table} from "spectacle";
import images from "../../images";

export default (
  <Slide
    textColor="white"
    transition={["fade"]}
    notes={`
            <ul>
              <li></li>
              <li></li>
            </ul>
`}
  >
    <Heading size={4}>
      (My) Tooling Evolution
    </Heading>
    <Table>
      <TableHeader>
        <TableHeaderItem>

        </TableHeaderItem>
        <TableHeaderItem>
          Learning<br/>Curve<br/><span style={{ marginTop: "0.5em", fontSize: "2em" }}>🎓</span>
        </TableHeaderItem>
        <TableHeaderItem>
          Human<br/>Factor<br/><span style={{ marginTop: "0.5em", fontSize: "2em" }}>🤷</span>
        </TableHeaderItem>
        <TableHeaderItem>
          Magic<br/>Involved<br/><span style={{ marginTop: "0.5em", fontSize: "2em" }}>💫</span>
        </TableHeaderItem>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableItem>
            FTP/SFTP (ex. PHP site hosting)
          </TableItem>
          <TableItem>
            10h
          </TableItem>
          <TableItem>
            1
          </TableItem>
          <TableItem>
            0
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            ... then manage own server
          </TableItem>
          <TableItem>
            +100h
          </TableItem>
          <TableItem>
            0.8
          </TableItem>
          <TableItem>
            0.2
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            SSH + Manual git pull deployment
          </TableItem>
          <TableItem>
            +50h...
          </TableItem>
          <TableItem>
            0.7
          </TableItem>
          <TableItem>
            0.3
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            ... adding external CI/CD tool
          </TableItem>
          <TableItem>
            +16h
          </TableItem>
          <TableItem>
            0.6
          </TableItem>
          <TableItem>
            100500
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            Docker
          </TableItem>
          <TableItem>
            +30h
          </TableItem>
          <TableItem>
            0.5
          </TableItem>
          <TableItem>
            0.5
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            Heroku / Dokku / ServerLess / Zeit Now
          </TableItem>
          <TableItem>
            +30h
          </TableItem>
          <TableItem>
            0.3
          </TableItem>
          <TableItem>
            0.7
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
);

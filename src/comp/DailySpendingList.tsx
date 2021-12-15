import React, { useState, useEffect } from "react";
import api from "./api";

import ListMui from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const List = () => {
  const [spendings, setSpendings] = useState<any[]>([]);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    api.spendings().then((reponse) => setSpendings(reponse.data));
  }, []);

  const addSpending: any = (event: any) => {
    if (event && event.target) {
      if (event.key === "Enter") {
        api.addSpending({ amount }).then((response) => {
          api.spendings().then((reponse) => setSpendings(reponse.data));
          setAmount(null);
        });
      }
    }
  };

  const textFieldChanged: any = (event: any) => {
    const amount: any = event.target.value;

    if (!(Number(amount) % 1 === 0) && !(Number(amount) && Number(amount) % 1 !== 0)) {
      return;
    }

    setAmount(amount);
  };

  console.log(amount);
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "2em",
        }}
      >
        <TextField
          onKeyPress={addSpending}
          onChange={textFieldChanged}
          label="input your spending"
          value={amount ? amount : ""}
        />
      </Box>
      <ListMui
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {spendings &&
          spendings.length &&
          spendings.map((spending) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={spending.amount} secondary={spending.created_at} />
            </ListItem>
          ))}
      </ListMui>
    </>
  );
};

export default List;
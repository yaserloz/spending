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
const MonthlySpendingList = () => {
  const [spendings, setSpendings] = useState<any[]>([]);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    api.monthlySpending().then((reponse) => setSpendings(reponse.data));
  }, []);


  const textFieldChanged: any = (event: any) => {
    const amount: any = event.target.value;

    if (!(Number(amount) % 1 === 0) && !(Number(amount) && Number(amount) % 1 !== 0)) {
      return;
    }

    setAmount(amount);
  };

  return (
    <>
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
              <ListItemText primary={spending.amount} secondary={spending.date_sp} />
            </ListItem>
          ))}
      </ListMui>
    </>
  );
};

export default MonthlySpendingList;
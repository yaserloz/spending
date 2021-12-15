// import React, { useState, useEffect } from "react";
// import api from "./api";

// import ListMui from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// const List = () => {
//   const [spendings, setSpendings] = useState<any[]>([]);
//   const [amount, setAmount] = useState(null);

//   useEffect(() => {
//     api.spendings().then((reponse) => setSpendings(reponse.data));
//   }, []);

//   const addSpending: any = (event: any) => {
//     if (event && event.target) {
//       if (event.key === "Enter") {
//         api.addSpending({ amount }).then((response) => {
//           api.spendings().then((reponse) => setSpendings(reponse.data));
//           setAmount(null);
//         });
//       }
//     }
//   };

//   const textFieldChanged: any = (event: any) => {
//     const amount: any = event.target.value;

//     if (!(Number(amount) % 1 === 0) && !(Number(amount) && Number(amount) % 1 !== 0)) {
//       return;
//     }

//     setAmount(amount);
//   };

//   console.log(amount);
//   return (
//     <>
//       <Box
//         sx={{
//           width: 500,
//           maxWidth: "100%",
//           margin: "2em",
//         }}
//       >
//         <TextField
//           onKeyPress={addSpending}
//           onChange={textFieldChanged}
//           label="input your spending"
//           value={amount ? amount : ""}
//         />
//       </Box>
//       <ListMui
//         sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
//       >
//         {spendings &&
//           spendings.length &&
//           spendings.map((spending) => (
//             <ListItem>
//               <ListItemAvatar>
//                 <Avatar>
//                   <WorkIcon />
//                 </Avatar>
//               </ListItemAvatar>
//               <ListItemText primary={spending.amount} secondary={spending.created_at} />
//             </ListItem>
//           ))}
//       </ListMui>
//     </>
//   );
// };

// export default List;

import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Spendings from "./Spendings";
import MonthlySpendingList from "./MonthlySpendingList";
import DailySpendingList from "./DailySpendingList";
import YearlySpendingList from "./YearlySpendingList";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="SPENDING" {...a11yProps(0)} />
          <Tab label="DAILY" {...a11yProps(1)} />
          <Tab label="MONTHLY" {...a11yProps(2)} />
          <Tab label="YEARLY" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Spendings />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DailySpendingList />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MonthlySpendingList />{" "}
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <YearlySpendingList />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

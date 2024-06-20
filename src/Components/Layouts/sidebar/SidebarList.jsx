import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import SidebarData from "./SidebarData";

const SidebarList = () => {
  const location = useLocation();
  const [selectedItem, setselectedItem] = useState(location.pathname);
  const handleListItemClick = (route) => {
    setselectedItem(route);
    navigate(route);
  };

  const navigate = useNavigate();
  const [open, setOpen] = useState({});
  const handleClick = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const renderList = (items, level = 1) => {
    return items
      .filter((s) => s.permission)
      .map((item, index) => {
        const hasChildren = item.children && item.children.length > 0;
        return (
          <React.Fragment key={item.title}>
            <ListItem sx={{p: 0}}>
            <ListItemButton
              sx={{ pl: 2 * level }}
              onClick={() => {
                if (hasChildren) {
                  handleClick(index);
                } else {
                  handleListItemClick(item.href);
                }
              }}
              selected={selectedItem === item.href}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              {hasChildren && (open[index] ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            </ListItem>
            {hasChildren && (
              <Collapse in={open[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {renderList(item.children, level + 1)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      });
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {renderList(SidebarData)}
    </List>
  );
};

export default SidebarList;

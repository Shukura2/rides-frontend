import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useMediaQuery, useTheme } from "@mui/material";
import color from "../../assets/base/colors";
import Logo from "../Logo";
import style from "../PassengerDashboard/style";
import DriverDrawer from "./Drawer";
import { authSelectors, logout } from "../../features/userSlice";
import EditProfile from "../EditProfile";
import { handleClickType } from "../../types";
import { getProfilePic } from "../../services/user";

const DriverDashboardNavbar = ({
  handleClick,
}: handleClickType): JSX.Element => {
  const {
    user: { userInfo },
  } = useSelector(authSelectors);

  const router = useRouter();
  const dispatch = useDispatch();
  const firstLetterOfUserName = userInfo && userInfo.firstName.charAt(0);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [profilePic, setProfilePic] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xl"));

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeEdit = () => {
    handleClose();
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUserLogout = () => {
    setAnchorEl(null);
    dispatch(logout());
    router.push("/login");
  };

  const getUserPic = async () => {
    try {
      const userPic = await getProfilePic();
      const { profile_pic } = userPic.message;
      setProfilePic(profile_pic);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    getUserPic();
  }, [userInfo]);
  return (
    <AppBar elevation={0} sx={style.container}>
      <Toolbar sx={style.toolboxWrap}>
        <Box sx={{ display: "flex" }}>
          <IconButton
            onClick={() => {
              handleClick(openDrawer);
              setOpenDrawer(!openDrawer);
            }}
            sx={{ marginRight: "8px", color: color.black.main }}
          >
            <MenuIcon />
          </IconButton>
          <Logo text="Rides" />
        </Box>
        {isMobile && openDrawer && (
          <Typography sx={{ color: color.black.main }}>
            <DriverDrawer open={openDrawer} setOpen={setOpenDrawer} />
          </Typography>
        )}
        <IconButton
          size="large"
          aria-controls="menu-appbar"
          onClick={handleMenu}
        >
          {profilePic ? (
            <Box component="img" src={profilePic} sx={style.profilePicWrap} />
          ) : (
            <Box sx={style.profilePicAvatarWrap}>
              <Typography sx={style.userName}>
                {firstLetterOfUserName}
              </Typography>
            </Box>
          )}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={closeEdit}>Edit profile</MenuItem>
          <MenuItem onClick={handleUserLogout}>Log out</MenuItem>
        </Menu>
        {isOpen && (
          <EditProfile
            isOpen={isOpen}
            handleClickClose={handleClickClose}
            setIsOpen={setIsOpen}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DriverDashboardNavbar;

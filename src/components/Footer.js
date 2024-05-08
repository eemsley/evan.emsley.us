import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
function Footer() {
  return (
    <div className="h-full w-full bg-slate-300 flex flex-row justify-evenly text-white items-center">
      <InstagramIcon style={{ height: "75%", color: "#475569" }} />
      <LocalPhoneRoundedIcon style={{ height: "75%", color: "#475569" }} />
      <EmailRoundedIcon style={{ height: "75%", color: "#475569" }} />
    </div>
  );
}
export default Footer;

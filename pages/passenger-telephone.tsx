import { useDataContext } from "@/utils/tokenValidate";

const PassengerTelephone = (): JSX.Element => {
  const {
    userInfo: { firstName, email },
  } = useDataContext();
  return (
    <div>
      PassengerTelephone {firstName}, {email}
    </div>
  );
};

PassengerTelephone.auth = true;
export default PassengerTelephone;

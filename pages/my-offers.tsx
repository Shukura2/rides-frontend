import { useState, useEffect } from "react";
import DriverLayout from "@/components/layouts/DriverLayout";
import { getMyOffers } from "@/services/driver";
import OfferData from "@/components/offers/OfferData";
import { deleteMyOffer } from "@/services/driver";
import SnackbarNotification from "@/components/SignUpPassenger/SnackbarNotification";
import { MyOffer } from "@/types";

const MyOffers = (): JSX.Element => {
  const [offersData, setOffersData] = useState<null | MyOffer[]>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [offer, setOffer] = useState({});

  const handleErrorClose = () => setErrorMessage("");
  const handleSuccessClose = () => setSuccessMessage("");

  const offers = async () => {
    setIsloading(true);
    try {
      const response = await getMyOffers();
      setOffersData(response.message);
      setIsloading(false);
    } catch (error: any) {
      setOffersData(error.message);
    }
  };

  useEffect(() => {
    offers();
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  const handleDelete = async (id: string) => {
    try {
      const delOffer = await deleteMyOffer(id);
      setSuccessMessage(delOffer.message);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleEdit = (id: string) => {
    const data = offersData?.find((item) => item.ride_offer_id === id);
    setOffer(data);
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <SnackbarNotification
        open={errorMessage.length > 0}
        autoHideDuration={4000}
        onClose={handleErrorClose}
        severity="error"
        variant="filled"
        message={errorMessage}
      />
      <SnackbarNotification
        open={successMessage.length > 0}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
        severity="success"
        variant="filled"
        message={successMessage}
      />
      <table
        width="100%"
        style={{
          textAlign: "left",
          borderSpacing: 20,
          textTransform: "capitalize",
        }}
      >
        <thead>
          <tr>
            <th>Location</th>
            <th>Destination</th>
            <th>Amount</th>
            <th style={{ width: "20%" }}>Date of Trip</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {offersData?.map((offer) => {
            return (
              <OfferData
                key={offer.ride_offer_id}
                {...offer}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                offer={offer}
                setOffer={setOffer}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

MyOffers.getLayout = DriverLayout;
MyOffers.auth = true;
export default MyOffers;

import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoiam9yZGFua2ltc2V5IiwiYSI6ImNrdDdjeG8yMjByMjMyb3F3YmttaDdzZzQifQ.y_GHG-CnXA9BsZUEobVUKw',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoiam9yZGFua2ltc2V5IiwiYSI6ImNrdDdjeG8yMjByMjMyb3F3YmttaDdzZzQifQ.y_GHG-CnXA9BsZUEobVUKw',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <Link href='/'>
            <ConfirmButton>Confirm UberX</ConfirmButton>
          </Link>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
h-screen flex flex-col w-full 
`;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
  
const BackButton = tw.img`
  h-10 object-contain 
`;

const RideContainer = tw.div`
  flex flex-1 flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2 mx-4
`;

const ConfirmButton = tw.button`
bg-black text-white w-full my-4 py-4 
`;


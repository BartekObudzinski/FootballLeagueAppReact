import React, { useState } from "react";

const FormResultEdit = ({ singleMatch, setResultEdit }) => {
  const [editHostResult, setEditHostResult] = useState(singleMatch.hostGoals);
  const [editGuestResult, setEditGuestResult] = useState(
    singleMatch.guestGoals
  );
  return <h1>kekw</h1>;
};

export default FormResultEdit;

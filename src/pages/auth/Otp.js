// src/OtpInput.js
import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const OtpInput = ({ length, email, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;
    if (/[^0-9]/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const nextSibling = document.getElementById(`otp-input-${index + 1}`);
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        const prevSibling = document.getElementById(`otp-input-${index - 1}`);
        if (prevSibling !== null) {
          prevSibling.focus();
        }
      }

      const newOtp = [...otp];
      for (let i = index; i < length; i++) {
        newOtp[i] = "";
      }
      setOtp(newOtp);
    }
  };
  // For OTP verification btn
  const [verifyLoading, setVerifyLoading] = React.useState(false);
  function handleVerifyClick(e) {
    setVerifyLoading(!verifyLoading);
    e.preventDefault();
    onSubmit(otp, email);
  }

  return (
    <>
      <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
        {otp.map((_, index) => (
          <TextField
            key={index}
            id={`otp-input-${index}`}
            variant="outlined"
            type="password"
            inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            sx={{
              margin: "0 0.25rem",
            }}
            size="small"
          />
        ))}
      </Box>
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 2 }}
        onClick={handleVerifyClick}
        endIcon={""}
        loading={verifyLoading}
        loadingPosition="end"
        color="success"
        // disabled={true}
      >
        <span>Verify</span>
      </LoadingButton>
    </>
  );
};

export default OtpInput;

"use client";

import {useSnackbar} from "notistack";

export const snackbarHandler = (message, variant) => {
  const {enqueueSnackbar} = useSnackbar();

  enqueueSnackbar(message, {
    variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  });
};

// commented by Rutuja 13 nov

// import { baseUrl } from "@/config/config.development";
import axios from "axios";
import { DocumentPickerAsset } from "expo-document-picker";

// --------------------------------------------------------------------------------------------

export async function sendFileToServerForProcess(
  file: DocumentPickerAsset,
  phoneAndDocumentId: string
) {
  const formData = new FormData();

  console.log("File details", file, phoneAndDocumentId);

  if (file.mimeType === "application/pdf") {
    (formData as any).append("document", {
      uri: file.uri,
      name: "document.pdf",
      type: "application/pdf",
    });

    (formData as any).append("phoneAndDocumentId", phoneAndDocumentId);
  
    // ------------------------------------------------------------------------------------

    // commented by Rutuja 13 nov

    // try {
    //   const res = await axios({
    //     method: "post",
    //     url: `${baseUrl}/upload-document`,
    //     data: formData,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (res.status !== 200) {
    //     console.log("Failed to upload document");
    //     return false;
    //   }

    //   if (res.status === 200) {
    //     console.log("response", res.data, res.status);
    //     return res.data;
    //   }
    // } catch (error) {
    //   console.log("Error is", error);
    //   return false;
    // }
  }

  if (file.mimeType === "image/jpeg") {
    (formData as any).append("photo", {
      uri: file.uri,
      name: "photo.jpg",
      type: "image/jpeg",
    });

    (formData as any).append("phoneAndDocumentId", phoneAndDocumentId);

    // ------------------------------------------------------------------------------------

    // commented by Rutuja 13 nov

    // try {
    //   const res = await axios({
    //     method: "post",
    //     url: `${baseUrl}/upload-image`,
    //     data: formData,
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   if (res.status !== 200) {
    //     console.log("Failed to upload image");
    //     return false;
    //   }

    //   if (res.status === 200) {
    //     console.log("response", res.data, res.status);
    //     return res.data;
    //   }
    // } catch (error) {
    //   console.log("Error is", error);
    //   return false;
    // }
  }

  // -----------------------------------------------------------------------------------------

  // (formData as any).append("photo", {
  //   uri: imageDetails.uri,
  //   name: "photo.jpg",
  //   type: "image/jpeg",
  // });

  // try {
  //   const res = await axios({
  //     method: "post",
  //     url: `${baseUrl}/upload-document?type=${type}`,
  //     data: formData,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   if (res.status !== 200) {
  //     console.log("Failed to upload image");
  //     return false;
  //   }

  //   if (res.status === 200) {
  //     console.log("response", res.data, res.status);
  //     return res.data;
  //   }
  // } catch (error) {
  //   console.log("Error is", error);
  //   return false;
  // }
}

// --------------------------------------------------------------------------------------------

export const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  const initials = nameParts
    .map((part) => part[0] && part[0].toUpperCase())
    .join("");
  return initials;
};

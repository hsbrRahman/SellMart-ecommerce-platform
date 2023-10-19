import React, { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { auth, db } from "../firebase/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message!");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "Messages"), {
      message: input,
      name: displayName,
      uid,
      createdAt: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={sendMessage}>
      <TextInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default SendMessage;
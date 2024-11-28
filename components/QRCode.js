import React from "react";
import { View, StyleSheet } from "react-native";
import { QRCodeCanvas } from "qrcode.react";

const QRCode = () => {
  const url = "https://example.com/list";

  return (
    <View style={styles.container}>
      <QRCodeCanvas value={url} size={150} bgColor="#ffffff" fgColor="#0047ab" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default QRCode;

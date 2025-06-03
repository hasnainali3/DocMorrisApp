import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import styled from 'styled-components/native';

export const QRScannerScreen = () => {
  const hasPermission = useCameraPermission();
  const device = useCameraDevice('back');

  const [QRScanned, setQRScanned] = useState<boolean>(false);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      setQRScanned(true);
      onQRCodeScanned(codes[0]?.value ?? '');
    },
  });

  const onQRCodeScanned = (value: string) => {
    Alert.alert('QR Code Scanned', `Prescription ID: ${value}`);
  };

  if (QRScanned) {
    return null;
  }

  if (!hasPermission || !device) {
    return <LoadingText>Loading camera...</LoadingText>;
  }

  return (
    <Container>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
      <Overlay>
        <Instruction>Align QR code inside the box</Instruction>
        <FrameBox />
      </Overlay>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Overlay = styled.View`
  justify-content: center;
  align-items: center;
`;

const FrameBox = styled.View`
  width: 250px;
  height: 250px;
  border-width: 3px;
  border-color: #00c853;
  border-radius: 12px;
`;

const Instruction = styled.Text`
  color: white;
  font-size: 18px;
  margin-bottom: 16px;
`;

const LoadingText = styled.Text`
  flex: 1;
  text-align: center;
  margin-top: 50%;
  font-size: 16px;
`;

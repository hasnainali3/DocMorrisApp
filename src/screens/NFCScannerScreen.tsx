import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';
import {Alert, Platform} from 'react-native';

export const NFCScannerScreen = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [tag, setTag] = useState<TagEvent | null>(null);

  useEffect(() => {
    checkNfcSupport();
    return () => {
      NfcManager.cancelTechnologyRequest().catch(() => null);
    };
  }, []);

  const checkNfcSupport = async () => {
    const supported = await NfcManager.isSupported();

    setIsSupported(supported);
  };

  const startNfcScan = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      setTag(tag);
      Alert.alert('NFC Tag Read', `Prescription ID: ${tag?.id || 'Unknown'}`);
    } catch (ex) {
      console.warn('NFC Error', ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <Container>
      <Title>Scan Health Card</Title>
      {isSupported ? (
        <>
          <Button onPress={startNfcScan}>
            <ButtonText>Start NFC Scan</ButtonText>
          </Button>
          {tag && <TagText>Tag ID: {tag.id}</TagText>}
        </>
      ) : (
        <Unsupported>NFC is not supported on this device.</Unsupported>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({theme}) => theme.spacing.l}px;
  background-color: ${({theme}) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 14px 20px;
  border-radius: 12px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const TagText = styled.Text`
  margin-top: 20px;
  font-size: 16px;
`;

const Unsupported = styled.Text`
  color: red;
  font-size: 16px;
`;

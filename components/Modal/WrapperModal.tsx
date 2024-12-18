import React from "react"
import { Modal, StyleSheet, View } from "react-native";

const WrapperModal = ({ children, show, toggle }: { children: React.ReactNode, show: boolean, toggle: () => void }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={toggle}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
        </View>
      </View>
    </Modal>
  )

}

export default WrapperModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  modalView: {
    backgroundColor: 'white',
    borderEndStartRadius: 20,
    borderTopStartRadius: 20,
    padding: 20,
    width: "100%",
    // height: "95%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})



import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import useSliders from '@/hooks/usePagerView'

const Sliders = () => {
  const { data, position, pager, goToPage, onSelectedPage } = useSliders()

  return (
    <View style={styles.container}>
      <PagerView initialPage={0} style={styles.sliders} onPageSelected={onSelectedPage} ref={pager.ref} >
        {
          pager.pages.map((_, index) => (
            <View style={styles.slider} key={index}>
              <View>
                <Image source={require('@/assets/illustrations/illustration (3).png')} />
              </View>
              <Text style={styles.textWelcome}>{data[index].welcomeText}</Text>
              <Text style={styles.paragraph}>
                {data[index].paragraph}
              </Text>

            </View>
          ))
        }
      </PagerView>
      <View style={styles.indicatorBall}>
        {
          pager.pages.map((_, index) => (
            <Pressable key={index} style={position == index ? styles.ballActive : styles.ballInActive} onPress={() => goToPage(index)}></Pressable>
          ))
        }
      </View>
    </View>
  )
}

export default Sliders

const styles = StyleSheet.create({
  container: {
    height: "70%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 50,
  },
  sliders: {
    height: "100%",
    width: "100%",
  },
  slider: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textWelcome: {
    color: Colors.primary.black,
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 25,
    // backgroundColor: Colors.green.light,
  },
  paragraph: {
    textAlign: "center",
    marginTop: 10,
    color: "#484848",
    fontSize: 14,
  },
  indicatorBall: {
    marginTop: 30,
    flexDirection: "row",
    height: 20,
    width: "100%",
    gap: 15,
    justifyContent: 'center',
  },
  ballActive: {
    width: 15,
    height: 15,
    backgroundColor: Colors.green.dark,
    borderRadius: 100,
  },
  ballInActive: {
    width: 15,
    height: 15,
    backgroundColor: Colors.grey.darkGrey,
    borderRadius: 100,
  }
})
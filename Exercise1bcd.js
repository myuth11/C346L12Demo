import React,{useState, useEffect} from 'react';
import {StatusBar, Button, StyleSheet, Text, View} from 'react-native';
// import {Gyroscope} from "expo-sensors";
// import {Magnetometer} from "expo-sensors";
import {Barometer} from "expo-sensors";

const styles = StyleSheet.create({
  container: {

  },
});

//Exercise 1B
export default function App2() {

    const [{x,y,z}, setData] = useState({x:0,y:0,z:0});

    useEffect(()=>{
        Gyroscope.setUpdateInterval(100);
        const subscription = Gyroscope.addListener(setData);
        return()=>subscription.remove();

    }
    ,[]);

  return (
    <View>
      <StatusBar />
        <Text>x: {x}</Text>
        <Text>y: {y}</Text>
        <Text>z: {z}</Text>
    </View>
  );
}

//Exercise1C
export default function App2() {

    const [{x,y,z}, setData] = useState({x:0,y:0,z:0});

    useEffect(()=>{
            Magnetometer.setUpdateInterval(100);
            const subscription = Magnetometer.addListener(setData);
            return()=>subscription.remove();

        }
        ,[]);

    return (
        <View>
            <StatusBar />
            <Text>x: {x}</Text>
            <Text>y: {y}</Text>
            <Text>z: {z}</Text>
        </View>
    );
}

//Exercise1D
export default function App2() {

    const [{Pressure,Relative_Altitude}, setData] = useState({Pressure:0,Relative_Altitude:0});

    useEffect(()=>{
            Barometer.setUpdateInterval(100);
            const subscription = Barometer.addListener(setData);
            return()=>subscription.remove();

        }
        ,[]);

    return (
        <View>
            <StatusBar />
            <Text>Pressure: {Pressure}</Text>
            <Text>Relative Altitude {Relative_Altitude}</Text>
        </View>
    );
}




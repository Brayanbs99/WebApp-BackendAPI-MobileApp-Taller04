import { useEffect, useState } from "react"
import { View, Text } from "react-native";

export default function Clock(){
    let [time, setTime] = useState('00:00');

    useEffect(() => {
        let tick = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.info('tick');
        }, 1000);
        return () => {
            clearInterval(tick);
        };
    }, []); //Este arreglo hace que se llame en todos los renders, sin este, se ejecuta solo una vez

    useEffect(() => {
        console.log('rendering');
    });

    return(
      <View>
          <Text>
              {time}
          </Text>
      </View>
    );
}
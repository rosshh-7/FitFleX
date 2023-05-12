import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import EStyleSheet from 'react-native-extended-stylesheet';
//import {Shadow} from './chartAdds';

EStyleSheet.build();

export default function GraphBox() {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          alignSelf: 'flex-end',
          width: '18%',
          aspectRatio: 1.75 / 1,
          backgroundColor: 'blue',

          borderRadius: 21,
          top: '52%',
          right: '4%',
        }}>
        <View style={styles.chartTag1}>
          <Text style={styles.chartTagSize}>CALORIE </Text>
        </View>
        <View style={styles.chartTag2}>
          <Text style={styles.chartTagSize}>TRACKER</Text>
        </View>
      </View>

      <View style={styles.chartArea}>
        <LineChart
          data={{
            labels: ['01/05', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [1500, 2200, 2500, 0, 2000, 2150],
                //color: '#163BBD',
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={Dimensions.get('window').width * 0.55}
          yAxisLabel="Cal "
          withHorizontalLines={false}
          //yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            useShadowColorFromDataset: true,
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            //fillShadowGradient: '#1D48B9',
            fillShadowGradientFrom: '#1D48B9',
            fillShadowGradientTo: '#D7DEEF',
            fillShadowGradientOpacity: 0.9,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#000000',
              fill: '#163BBD',
            },
          }}
          style={{
            marginVertical: 5,
          }}
        />
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  chartArea: {
    flex: 1,
    width: '100%',
    aspectRatio: 1.8 / 1,
    //backgroundColor: 'red',
    top: '34%',
    elevation: Platform.OS === 'android' ? -1 : 0,
  },
  chartTag1: {
    //fontSize: '0.8rem',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    //zIndex: 99,
    // elevation: Platform.OS === 'android' ? 50 : 0,
    //backgroundColor: 'red',
  },
  chartTag2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  chartTagSize: {
    fontSize: '0.75rem',
    color: '#fff',
  },
});

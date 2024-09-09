// import React, { useState } from 'react';
// import { View, PanResponder } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// const ScratchCard = () => {
//   const [path, setPath] = useState('');

//   const handlePanResponderMove = (_, gestureState) => {
//     const { moveX, moveY } = gestureState;
//     setPath(path + `M${moveX},${moveY} `);
//   };

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onMoveShouldSetPanResponder: () => true,
//     onPanResponderMove: handlePanResponderMove,
//   });

//   return (
//     <View {...panResponder.panHandlers} style={{ flex: 1 }}>
//       <Svg height="100%" width="100%">
//         <Path
//           d={path}
//           fill="transparent"
//           stroke="#000"
//           strokeWidth={10}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </Svg>
//     </View>
//   );
// };

// export default ScratchCard;


import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
// import { Path, G, Svg } from 'react-native-svg';

const ScratchCard = () => {
  const [isScratched, setIsScratched] = useState(false);

  const handleScratch = () => {
    setIsScratched(true);
  };

  return (
    <View style={styles.container}>
      {/* <Svg width="300" height="200">
        <G>
          <Path
            d="M10 10 L290 10 L290 190 L10 190 Z"
            fill={isScratched ? 'white' : 'gray'}
          />
          {isScratched ? (
            <Text x="50%" y="50%" textAnchor="middle" fontSize="24" fontWeight="bold">
              12345
            </Text>
          ) : null}
        </G>
      </Svg> */}
      {!isScratched && (
        <TouchableOpacity style={styles.scratchArea} onPress={handleScratch}>
          <Text style={styles.scratchText}>Scratch to reveal</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scratchArea: {
    position: 'absolute',
    width: 300,
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scratchText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ScratchCard;



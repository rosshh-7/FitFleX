import {View, Text, ScrollView, TextInput, Pressable} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import NameTag from '../../drawables/assets/NameTag';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Bubbles from '../../drawables/assets/Bubbles';
import SelectDropdown from 'react-native-select-dropdown';
export default function TodayWorkout() {
  return (
    <>
      <NameTag Name={`Today's Workout`} />
      <View style={styles.dayInfoBlock}>
        <Text style={styles.dayInfo}>Today is Chest Day</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '96%',
          aspectRatio: 7.8 / 1,

          position: 'absolute',
          alignSelf: 'center',

          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: '17%',
        }}>
        <View style={{flex: 2, maxWidth: '35%'}}>
          <SelectDropdown
            data={[
              'Barbell Chest Press',
              'Dumbell Chest Press',
              'Cable Fly',
              'Inclined Chest Press',
              'Dumbell Fly',
            ]}
            buttonStyle={{
              maxWidth: '100%',
              height: '100%',
              backgroundColor: '#D9D9D9',
              maxheight: '100%',
            }}
            buttonTextStyle={{fontSize: 15}}
            defaultButtonText={'Exercise'}
            renderDropdownIcon={isOpened => {
              return (
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            // buttonTextAfterSelection={(selectedItem, index) => {
            //   // text represented after item is selected
            //   // if data array is an array of objects then return selectedItem.property to render after item is selected
            //   return selectedItem;
            // }}
            // rowTextForSelection={(item, index) => {
            //   // text represented for each item in dropdown
            //   // if data array is an array of objects then return item.property to represent item in dropdown
            //   return item;
            //}}
          />
        </View>
        <View style={{flex: 2, maxWidth: '30%'}}></View>
        <View style={{flex: 1, maxWidth: '20%'}}></View>
      </View>
      <View
        style={{
          flex: 1,
          width: '96%',
          aspectRatio: 2.8 / 1,

          position: 'absolute',
          alignSelf: 'center',
          top: '25%',
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
          }}>
          <View
            style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.selectedExercise}> Barbell Chest Press</Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-start',
              justifyContent: 'center',
              //backgroundColor: '#082B85',
            }}>
            <Icon
              name={'history'}
              style={styles.historyIcon}
              color={'#fff'}></Icon>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flex: 3, backgroundColor: 'pink', maxWidth: '35%'}}>
            <TextInput
              textAlign="center"
              style={styles.weightinp1}
              placeholder="type here"
              value={'0'}
              keyboardType="numeric"
              // onChangeText={item => {
              //   setQuantity(item);
              // }}
            ></TextInput>
          </View>
          <View style={{flex: 2, maxWidth: '30%'}}>
            <SelectDropdown
              data={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
              ]}
              buttonStyle={{
                maxWidth: '100%',
                //maxHeight: '100%',
                backgroundColor: '#D9D9D9',
                maxHeight: '100%',
              }}
              buttonTextStyle={{fontSize: 15}}
              defaultButtonText={'Reps'}
              renderDropdownIcon={isOpened => {
                return (
                  <Icon
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={{flex: 1, maxWidth: '20%'}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <MaterialIcons
              name={'cancel'}
              style={styles.canIcon}
              color={'red'}></MaterialIcons>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'md-checkmark-done-circle-sharp'}
              style={styles.canIcon}
              color={'green'}></Ionicons>
          </View>
        </View>
      </View>
      <View style={styles.updatesHeading}>
        <View style={styles.updateName}>
          <Text style={styles.updatesText}>TODAY'S UPDATES</Text>
        </View>
      </View>
      <View style={styles.exerciseBlock}>
        <ScrollView>
          <View style={styles.exerciseHeading}>
            <View style={styles.exerciseName}>
              <Text style={styles.exerciseType}>1. Barbrell Chest Press</Text>
            </View>
            <View style={styles.exerciseAdd}></View>
          </View>
          <View style={styles.weightLabel}>
            <View
              style={{
                flex: 3,

                maxWidth: '35%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.weightLabelText}>Weights (lbs)</Text>
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'brown',
                maxWidth: '20%',
              }}></View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'grey',
                maxWidth: '20%',
              }}></View>
          </View>
          <View
            style={{
              flex: 1,

              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <TextInput
                editable={false}
                // /selectTextOnFocus={false}
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'50'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          {/* ---------------------------------------- */}

          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          <View style={styles.exerciseHeading}>
            <View style={styles.exerciseName}>
              <Text style={styles.exerciseType}>1. Barbrell Chest Press</Text>
            </View>
            <View style={styles.exerciseAdd}></View>
          </View>
          <View style={styles.weightLabel}>
            <View
              style={{
                flex: 3,

                maxWidth: '35%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.weightLabelText}>Weights (lbs)</Text>
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'brown',
                maxWidth: '20%',
              }}></View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'grey',
                maxWidth: '20%',
              }}></View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'yellow',
              aspectRatio: 8.35 / 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.weightInput}>
              <TextInput
                textAlign="center"
                style={styles.weightinp}
                placeholder="type here"
                value={'0'}
                keyboardType="numeric"
                // onChangeText={item => {
                //   setQuantity(item);
                // }}
              ></TextInput>
            </View>
            <View style={styles.weightSelect}>
              <SelectDropdown
                data={[
                  '1',
                  '2',
                  '3',
                  '4',
                  '5',
                  '6',
                  '7',
                  '8',
                  '9',
                  '10',
                  '11',
                  '12',
                  '13',
                  '14',
                  '15',
                  '16',
                ]}
                buttonStyle={{
                  maxWidth: '100%',
                  //maxHeight: '100%',
                  backgroundColor: '#D9D9D9',
                  maxHeight: '90%',
                }}
                buttonTextStyle={{fontSize: 15}}
                defaultButtonText={'Reps'}
                renderDropdownIcon={isOpened => {
                  return (
                    <Icon
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.weightRemove}>
              <Icon name={'minus-circle'} color={'red'} size={30} />
            </View>
          </View>
          {/* --------------------------------------------------------------------------------------- */}
        </ScrollView>
      </View>

      <Bubbles />
    </>
  );
}
const styles = EStyleSheet.create({
  canIcon: {
    fontSize: '2.8rem',
  },
  historyIcon: {
    fontSize: '1.5rem',
    backgroundColor: '#082B85',
    padding: 7,
    borderRadius: 50,
  },
  weightBlock: {
    flex: 5,
    aspectRatio: 2 / 1,
  },
  weightLabel: {
    flex: 1,
    width: '100%',
    aspectRatio: 12 / 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: 'blue',
  },
  weightLabelText: {
    // flex: 1,
    fontSize: '1rem',
  },
  weightInputBlock: {
    flex: 1,
    aspectRatio: 4 / 1,
    //backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  weightInput: {
    flex: 3,
    maxWidth: '35%',
    height: '100%',

    justifyContent: 'center',
  },
  weightSelect: {
    flex: 2,
    maxWidth: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightRemove: {
    flex: 1,
    //backgroundColor: 'red',
    maxWidth: '20%',
    height: '100%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightinp: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#D9D9D9',
    fontSize: '1.2rem',
    color: '#000',
  },
  weightinp1: {
    width: '100%',
    maxHeight: '100%',
    backgroundColor: '#D9D9D9',
    fontSize: '1.2rem',
  },

  dayInfo: {
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '1.1rem',
    color: '#646873',
  },
  dayInfoBlock: {
    flex: 1,
    position: 'absolute',
    top: '11%',
    left: '5%',
  },
  exerciseBlock: {
    width: '96%',
    //height: '65%',
    aspectRatio: 1.45 / 1,
    // backgroundColor: 'red',
    flex: 1,
    position: 'absolute',
    top: '49.5%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  exerciseHeading: {
    flex: 1,
    //backgroundColor: 'green',
    flexDirection: 'row',
    //maxHeight: '58%',
    aspectRatio: 7 / 1,
  },
  updatesHeading: {
    flex: 1,
    width: '96%',
    //backgroundColor: 'green',
    flexDirection: 'row',
    //maxHeight: '58%',
    aspectRatio: 7 / 1,
    position: 'absolute',
    top: '42%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updatesText: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  updateName: {
    flex: 1,
    maxWidth: '55%',
    //backgroundColor: 'yellow',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    flex: 3,
    //backgroundColor: 'yellow',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseAdd: {
    flex: 2,
    //backgroundColor: 'blue',
    padding: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  exerciseType: {
    fontSize: '1.2rem',
    color: '#000',
  },
  selectedExercise: {
    color: '#000',
    fontSize: '1.2rem',
  },
});

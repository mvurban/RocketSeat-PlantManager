
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native'
import colors from '../styles/colors'
import {Perfil} from '../components/Perfil'
import fonts from '../styles/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonAmbiente from '../components/ButtonAmbiente'

export function PlantSelect() {
   return (
      <SafeAreaView style={styles.container}>
         <Perfil texto1='Olá,' texto2='Marcelo' avatar = ''></Perfil>
         <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Em qual ambiente</Text>
            <Text style={styles.subTitulo}>você quer colocar sua planta?</Text>
         </View>
         <View style={styles.containerBotoesAmbiente}>
            <ScrollView style={styles.ScrollViewBotoesAmbiente} horizontal={true} showsHorizontalScrollIndicator={false} >               
               <ButtonAmbiente titulo='Sala' onPress={()=>{}}></ButtonAmbiente>               
               <ButtonAmbiente titulo='Quarto' onPress={()=>{}} destaque={true}></ButtonAmbiente>               
               <ButtonAmbiente titulo='Cozinha' onPress={()=>{}}></ButtonAmbiente>               
               <ButtonAmbiente titulo='Banheiro' onPress={()=>{}}></ButtonAmbiente>               
               <ButtonAmbiente titulo='Sacada' onPress={()=>{}}></ButtonAmbiente>               
            </ScrollView>
         </View>
         <View style={styles.containerPlantas}>

         </View>

      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      paddingVertical:80,
      paddingHorizontal:32,      
   },
   containerTitulo:{
      marginTop:40,
   },
   titulo:{
      color:colors.heading,
      fontFamily:fonts.heading,      
      fontSize:17,
   },
   subTitulo:{
      color:colors.heading,
      fontFamily:fonts.text,
      fontSize:17,
   },
   containerBotoesAmbiente:{
      marginTop:24,
   },
   ScrollViewBotoesAmbiente:{
      width:'100%',
   },
   containerPlantas:{
      marginTop:40,
   }
})

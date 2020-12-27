import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      sex: 0,
      sexOptions: [
        { key: 1, selection: 'male' },
        { key: 2, selection: 'female' }
      ],
      limitValue: 50,
      status: false
    }
    this.getName = this.getName.bind(this)
    this.getAge = this.getAge.bind(this)
    this.submit = this.submit.bind(this)
  }

  getName(text) {
    this.setState({ name: text })
  }

  getAge(number) {
    this.setState({ age: number })
  }

  submit() {
    if (this.state.name === '' || this.state.age === 0) {
      alert('Você deve preencher os seus dados');
      return; 
    } else {
      alert('Conta aberta com sucesso! \n\n' + 
      'Nome: '+this.state.name + '\n' +
      'Idade: '+this.state.age + '\n' +
      'Sexo: '+this.state.sexOptions[this.state.sex].selection+'\n'+
      'Limite da conta: '+this.state.limitValue.toFixed(0)+'\n'+
      ((this.state.status) ? 'Estudante' : '')
      )
    }
  }

  render() {
    let sexSelection = this.state.sexOptions.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.selection} />
    })

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Como você gostaria de ser chamado?</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome'
          underlineColorAndroid='transparent'
          onChangeText={this.getName}
        />
        <Text style={styles.text}>Qual a sua idade?</Text>
        <TextInput style={styles.input} placeholder='Digite sua idade'
          underlineColorAndroid='transparent'
          keyboardType='numeric'
          onChangeText={this.getAge}
        />
        <Text style={styles.text}>Qual o seu sexo?</Text>
        <Picker style={styles.input} selectedValue={this.state.sex}
          onValueChange={(itemValue, itemIndex) => { this.setState({ sex: itemValue }) }}
        >{sexSelection}</Picker>
        <SafeAreaView>
          <Text style={styles.text}>Qual limite você quer?</Text>
          <Slider minimumValue={50}
            maximumValue={2000}
            onValueChange={(selectedValue => { this.setState({ limitValue: selectedValue }) })}
            value={this.state.value}
          />
          <Text style={styles.text}>R$ {this.state.limitValue.toFixed(0)}</Text>
        </SafeAreaView>

        <SafeAreaView style={{marginTop: 25}}>
          <Text style={styles.text}>Você é estudante?</Text>
          <Switch value={this.state.status}
            onValueChange={(selectedValue) => this.setState({ status: selectedValue })} />
            <Text style={styles.text}>
              {this.state.status ? 'Sim, sou estudante' : 'Não sou estudante'}
            </Text>
        </SafeAreaView>

        <TouchableOpacity style={styles.btn} onPress={this.submit}>
          <Text style={styles.btnTxt}>Confirmar</Text>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    margin: 10,
    padding: 20,
  },
  btn: {
    borderColor: '#F58330',
    borderWidth: 2,
    borderRadius: 9,
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80
  },
  btnTxt: {
    color: '#67676B',
    textAlign: 'center'
  }
})

export default App;

// App para conta de banco Banco React
// Pedir nome (textInput)
// Idade (TextInput)
//Sexo (Picker)
// Seu Limite (slider)
// Estudante? (Switch)
// Botao Abrir conta (Opacity) > Mostra todos os dados em um alerta, 
// Não pode deixar dados em branco
// Ou mostrar dados na tela
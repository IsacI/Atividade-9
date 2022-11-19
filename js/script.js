function novosalario() {
    let salarioDigitado = prompt("Digite o seu Salario atual: ")
    let salario = Number(salarioDigitado.replace(",", "."))
  
    let aumentoDigitado = prompt("Digite o Percentual de aumento: ")
    let aumento = Number(aumentoDigitado.replace(",", ".")) / 100
  
    let NovoSalario = salario + salario * aumento
  
    alert(
      "Salario atual R$" +
        salario +
        "\nPercentual de aumento " +
        percentualDigitado +
        "% \n" +
        "Seu salario atualizado é de R$" +
        NovoSalario
    )
  }
  
  function PrecoMaca() {
    let quantidadeMaca = Number(
      prompt("Digite a quantidade de maçãs que deseja comprar: ")
    )
    if (quantidadeMaca >= 12) {
      let totalCompra = quantidadeMaca * 1
      alert("O custo total da compra é de R$ " + totalCompra)
    } else if (quantidadeMaca >= 1) {
      let totalCompra = quantidadeMaca * 1.3
      alert("O custo total da compra é de R$ " + totalCompra)
    } else {
      alert("Ops! Tente novamente")
    }
  }
  
  function sequencia() {
    let Number = Number(prompt("Digite um número: "))
  
    let sequencia
    if (Number > 0) {
      for (let i = 0; i < Number; Number--) {
        //alert(Number)
        sequencia = sequencia + " " + Number
      }
  
      alert("Sequência Numérica: " + sequencia)
    } else {
      alert("Ops! Só é permitido numero maiores que 0 ")
    }
  }
  
  function mediaAritAlunos() {
    let quantAlunos = Number(prompt("Quantos alunos tem na sala ?"))
    let notaclasse = Number()
  
    if (quantAlunos > 0) {
      for (let i = 0; i < quantAlunos; i++) {
        nota = Number(prompt("Digite a nota do aluno " + (i+1) + " :"))
        notaclasse = notaclasse + nota
      }
      let media = Number(notaclasse / quantAlunos)
      console.log(media)
      alert("A média da sala é de " + media)
    } else {
      alert("Quantidade de alunos Inválida")
    }
  }
  
  function temperaturaMedia() {
    let Janeiro = Number(
      prompt("Digite a temperatura Média de Janeiro: ")
    )
    let Fevereiro = Number(
      prompt("Digite a temperatura Média de Fevereiro: ")
    )
    let Março = Number(
      prompt("Digite a temperatura Média de Março: ")
    )
    let Abril = Number(
      prompt("Digite a temperatura Média de Abril: ")
    )
    let Maio = Number(
      prompt("Digite a temperatura Média de Maio: ")
    )
    let Junho = Number(
      prompt("Digite a temperatura Média de Junho: ")
    )
    let Julho = Number(
      prompt("Digite a temperatura Média de Julho: ")
    )
    let Agosto = Number(
      prompt("Digite a temperatura Média de Agosto: ")
    )
    let Setembro = Number(
      prompt("Digite a temperatura Média de Setembro: ")
    )
    let Outubro = Number(
      prompt("Digite a temperatura Média de Outubro: ")
    )
    let Novembro = Number(
      prompt("Digite a temperatura Média de Novembro: ")
    )
    let Dezembro = Number(
      prompt("Digite a temperatura Média de Dezembro: ")
    )
    let meses =
      Janeiro + Fevereiro + Março + Abril + Maio + Junho + Julho + Agosto + Setembro + Outubro + nov + Dezembro
    let temperaturaMedia = meses / 12
    let acimaMedia
    alert("A temperatura média é de " + temperaturaMedia.toFixed(2) + " Graus")
  
    if (Janeiro > tempMedia) {
      acimaMedia = "1 - Janeiro" + Janeiro + " Graus \n"
    }
    if (Fevereiro > tempMedia) {
      acimaMedia = acimaMedia + "2 - Fevereiro " + Fevereiro + " Graus \n"
    }
    if (Março > tempMedia) {
      acimaMedia = acimaMedia + "3 - Março " + Março + " Graus \n"
    }
    if (Abril > tempMedia) {
      acimaMedia = acimaMedia + "4 - Abril " + Abril + " Graus \n"
    }
    if (Maio > tempMedia) {
      acimaMedia = acimaMedia + "5 - Maio " + Maio + " Graus \n"
    }
    if (Junho > tempMedia) {
      acimaMedia = acimaMedia + "6 - Junho" + Junho + " Graus \n"
    }
    if (Julho > tempMedia) {
      acimaMedia = acimaMedia + "7 - Julho" + Julho + " Graus \n"
    }
    if (Agosto > tempMedia) {
      acimaMedia = acimaMedia + "8 - Agosto" + Agosto + " Graus \n"
    }
    if (Setembro > tempMedia) {
      acimaMedia = acimaMedia + "9 - Setembro" + Setembro + " Graus \n"
    }
    if (Outubro > tempMedia) {
      acimaMedia = acimaMedia + "10 - Outubro" + Outubro + " Graus \n"
    }
    if (nov > tempMedia) {
      acimaMedia = acimaMedia + "11 - Novembro" + nov + " Graus \n"
    }
    if (Dezembro > tempMedia) {
      acimaMedia = acimaMedia + "12 - Dezembro" + Dezembro + " Graus \n"
    }
  
    alert(acimaMedia.replace("undefined", " "))
  }
  function Radioativo() {
    let massa = Number(prompt("Digite a massa do material: ").replace(",", "."))
    let i
    for (i = 1; massa > 0.1; i++) {
      massa = massa * 0.75
      console.log("Massa=>" + massa)
      console.log("Tempo =>" + i)
    }
    console.log("Tempo =>" + (i - 1))
  
    let tempo = (i - 1) * 0.5
    alert(
      "O tempo necessario para a massa atingir a 0.10 é de " + tempo + " Minutos"
    )
  }
  function PHP() {
    let a = Number(prompt("Digite o 1º numero: "))
    let b = Number(prompt("Digite o 2º numero: "))
    let c = Number(prompt("Digite o 3º numero: "))
    let d = Number(prompt("Digite o 4º numero: "))
  
    let soma = a + c
    let multi = b * d
  
    if (soma > multi) {
      alert(
        "A+C é Maior que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + multi
      )
    } else if (soma < multi) {
      alert(
        "A+C é menor que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + multi
      )
    } else if (soma == multi) {
      alert(
        "A+C é igual que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + multi
      )
    } else {
      alert("Dados incorretos")
    }
  }
  
  function fatorial() {
    let num = BigInt(prompt("Digite um Numero: "))
    let fatorial = BigInt(1)
    let aux = num
    for (num; num > 0; num--) {
      fatorial = fatorial * num
      console.log(fatorial)
    }
    alert("O fatorial de " + aux + " é " + fatorial)
  }
  
  
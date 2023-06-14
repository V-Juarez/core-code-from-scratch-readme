Algoritmo calculator
	Definir number, num1, num2 Como Entero
	Definir msg1, msg2, result, error Como Caracter
	
	Escribir "=========== Simple Calculator ==========="
	Escribir "Select Option: "
	Escribir "Number 1: + Addition"
	Escribir "Number 2: - Substrac"
	Escribir "Number 3: * Multiplication"
	Escribir "Number 3: / Division"
	Escribir "===========     Calculator    ==========="
	
	Leer number
	
	msg1 <- "Write first number"
	msg2 <- "Write second number"
	erro <- "Operations not valid"
	result <- "Result: "
		
	
	Segun number Hacer
		1:
			Escribir msg1
			Leer num1
			Escribir msg2
			Leer num2
			sum <- num1 + num2
			Escribir result, sum
		2:
			Escribir msg1
			Leer num1
			Escribir msg2
			Leer num2
			sub <- num1 - num2
			Escribir result, sub
		3:
			Escribir msg1
			Leer num1
			Escribir msg2
			Leer num2
			mult <- num1 * num2
			Escribir result, mult
		4:
			Escribir msg1
			Leer num1
			Escribir msg2
			Leer num2
			div <- num1 / num2
			Escribir result, div
			Si num1 == 0 & num2 == 0 Entonces
				Escribir "ERROR 296: Division por cero"
			FinSi
		De Otro Modo:
			Si number == 5 | number <= number Entonces
				Escribir "Opcion not exist"
			FinSi
	Fin Segun
	
	// "=========== Result Calculator ==========="
	
	
FinAlgoritmo

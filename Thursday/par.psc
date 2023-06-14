Algoritmo par
	Definir number, result Como Entero
	Escribir "Write a number verify"
	Leer number
	
	result <- number % 2
	
	Si result == 0 Entonces
		Escribir "Numbero: ", number, " is Even."
	SiNo
		Escribir "Numbero: ", number, " is odd"
		
	Fin Si
FinAlgoritmo

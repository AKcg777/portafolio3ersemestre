import java.util.Scanner;

public class ContadorNegativo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int contador = 0, num = 0;
        while (num >= 0) {
            System.out.print("Ingresa número (- para salir): ");
            num = sc.nextInt();
            if (num >= 0) contador++;
        }
        System.out.println("Total introducidos: " + contador);
    }
}

import java.util.Scanner;

public class InvertirNumero {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingresa un número (0-9999): ");
        int num = scanner.nextInt();
        int invertido = 0;
        while (num > 0) {
            invertido = invertido * 10 + num % 10;
            num /= 10;
        }
        System.out.println("Número al revés: " + invertido);
    }
}
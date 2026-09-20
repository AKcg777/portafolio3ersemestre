import java.util.Scanner;

public class AdivinarNumero {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int secreto = (int)(Math.random() * 100) + 1;
        int intento;
        do {
            System.out.print("Adivina el número (1-100): ");
            intento = sc.nextInt();
            if (intento > secreto) System.out.println("Menor...");
            else if (intento < secreto) System.out.println("Mayor...");
        } while (intento != secreto);
        System.out.println("¡Felicidades, ganaste!");
    }
}

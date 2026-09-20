import java.util.Scanner;

public class NotaTexto {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingresa nota (0-10): ");
        int nota = sc.nextInt();
        String[] textos = {"cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"};
        System.out.println("Nota en texto: " + textos[nota]);
    }
}
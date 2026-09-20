import java.util.Scanner;

public class ConversorTemperatura {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingrese temperatura en grados Fahrenheit: ");
        double f = sc.nextDouble();
        double c = (5.0 / 9.0) * (f - 32);
        double k = c + 273.15;
        System.out.println("Celsius: " + c + " °C");
        System.out.println("Kelvin: " + k + " K");
    }
}
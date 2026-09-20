public class ContadorEspecial {
    public static void main(String[] args) {
        for (int i = 0; i <= 99999; i++) {
            String s = String.format("%05d", i);
            String res = s.replace('3', 'E');
            System.out.println(res);
        }
    }
}

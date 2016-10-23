// Voorbeeld 0203
// opstartklasse voor applicatie met paneel en event handler
import javax.swing.*;
import java.awt.event.*;

public class vb0203 extends Jframe

{
public static void main ( String args[])
{
jframe frame = new Vb0203 ();
frame.setsize ( 400, 200 ) ;
frame.setDefaultCloseOperation ( Jframe.exit_on_close ) ;
frame.setTitle( "Voorbeeld 0203" ) ;
Jpanel paneel = new Paneel ();
frame.setContentPane ( paneel ) ;
frame.setvisible ( true ) ;
}
}

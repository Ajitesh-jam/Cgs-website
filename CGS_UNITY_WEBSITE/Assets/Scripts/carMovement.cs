using UnityEngine;

public class carMovement : MonoBehaviour
{
    public float speed = 10f;          // Forward speed
    public float turnSpeed = 50f;      // Turning speed
    public Animator animator;          // Reference to the Animator component

    private void Update()
    {
        // Get input for movement and turning
        float moveInput = Input.GetAxis("Vertical");
        float turnInput = Input.GetAxis("Horizontal");

        // Move the car forward/backward
        transform.Translate(Vector3.forward * moveInput * speed * Time.deltaTime);

        // Turn the car
        transform.Rotate(Vector3.up, turnInput * turnSpeed * Time.deltaTime);

        // Optionally, you can trigger specific animations based on speed or input
        if (moveInput != 0)
        {
            animator.SetBool("IsMoving", true);
        }
        else
        {
            animator.SetBool("IsMoving", false);
        }
    }
}


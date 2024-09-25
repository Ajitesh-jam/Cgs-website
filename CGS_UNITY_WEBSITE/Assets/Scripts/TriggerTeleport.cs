using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class TriggerTeleport : MonoBehaviour
{
    public string url = "https://www.youtube.com"; // The URL to navigate to
    public TextMeshProUGUI messageText;                  // UI Text component to display the message

    private bool isPlayerInside = false;

    private void Start()
    {
        // Initially, hide the message
        //messageText.gameObject.SetActive(false);
    }

    private void Update()
    {
        // Check if the player is inside the trigger and presses the "T" key
        if (isPlayerInside && Input.GetKeyDown(KeyCode.T))
        {
            // Open the specified URL in the default web browser
            Application.OpenURL(url);
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        // Check if the GameObject that entered the trigger is the player
        if (other.CompareTag("Player"))
        {
            Debug.Log("PLayer inside Trigger");
            isPlayerInside = true;
            
            messageText.gameObject.SetActive(true); // Show the message
        }
    }

    private void OnTriggerExit(Collider other)
    {
        // Check if the GameObject that exited the trigger is the player
        if (other.CompareTag("Player"))
        {
            isPlayerInside = false;
            messageText.gameObject.SetActive(false); // Hide the message
        }
    }
}


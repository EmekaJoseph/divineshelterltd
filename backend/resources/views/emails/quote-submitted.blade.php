<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Quote Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8b500;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            margin-top: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field strong {
            display: inline-block;
            width: 150px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Quote Request Received</h2>
        </div>
        <div class="content">
            <p>A new quote request has been submitted through the website.</p>
            
            <div class="field">
                <strong>Name:</strong> {{ $quote->name }}
            </div>
            <div class="field">
                <strong>Email:</strong> {{ $quote->email }}
            </div>
            <div class="field">
                <strong>Phone:</strong> {{ $quote->phone }}
            </div>
            <div class="field">
                <strong>Project Details:</strong><br>
                {{ $quote->project_details }}
            </div>
            @if($quote->image_path)
            <div class="field">
                <strong>Attachment:</strong> Yes (File uploaded)
            </div>
            @endif
            <div class="field">
                <strong>Submitted:</strong> {{ $quote->created_at->format('F d, Y h:i A') }}
            </div>
        </div>
    </div>
</body>
</html>

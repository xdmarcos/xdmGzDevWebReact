# Contact Form Setup Guide

Your portfolio contact form is ready to work when deployed. Choose one of these methods:

## 🚀 Quick Setup Options

### Option 1: Web3Forms (Recommended - Free & Easy)

**Why?** No backend needed, works with Cloudflare Pages, free tier available.

1. **Get API Key**:
   - Go to https://web3forms.com
   - Sign up for free
   - Get your Access Key

2. **Configure**:
   ```env
   # Add to /app/frontend/.env.local
   REACT_APP_FORM_ENDPOINT=https://api.web3forms.com/submit
   ```

3. **In Sanity Studio** (or mock.js):
   ```
   formEndpoint: "https://api.web3forms.com/submit"
   ```

4. **That's it!** Forms will be sent to your email

---

### Option 2: Formspree

1. **Get Endpoint**:
   - Go to https://formspree.io
   - Create a new form
   - Get your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

2. **Configure**:
   ```env
   REACT_APP_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

---

### Option 3: EmailJS

1. **Setup**:
   - Go to https://www.emailjs.com
   - Create service + template
   - Install: `yarn add @emailjs/browser`

2. **Use their client-side SDK** (requires code update)

---

### Option 4: Cloudflare Workers (Advanced)

Create a serverless function to handle form submissions.

**Create `/app/workers/contact-form.js`**:
```javascript
export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const data = await request.json();
      
      // Send email using your preferred service
      // Example: Mailgun, SendGrid, etc.
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};
```

---

## 📝 Current Setup

Your contact form already supports:
- ✅ Dynamic title, subtitle, services from Sanity/Mock
- ✅ Form validation
- ✅ Loading states
- ✅ Success/Error toasts
- ✅ Configurable endpoint
- ✅ Fallback to demo mode if no endpoint

---

## 🎯 Recommended: Web3Forms Setup

**Step-by-step:**

1. **Sign up** at https://web3forms.com (free)

2. **Get Access Key** from dashboard

3. **Add to environment**:
   ```bash
   # /app/frontend/.env.local
   REACT_APP_FORM_ENDPOINT=https://api.web3forms.com/submit
   ```

4. **Add to .env.production** for deployment:
   ```bash
   # /app/frontend/.env.production
   REACT_APP_FORM_ENDPOINT=https://api.web3forms.com/submit
   ```

5. **Update mock.js** (optional, for testing):
   ```javascript
   formEndpoint: "https://api.web3forms.com/submit"
   ```

6. **Update form submission** in Contact.jsx:
   ```javascript
   body: JSON.stringify({
     access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Add this
     ...formData,
     subject: `Portfolio Contact from ${formData.name}`,
   })
   ```

7. **Deploy** - form will work automatically!

---

## 🔧 Configuration via Sanity

Once Sanity is set up, you can change the form endpoint without code:

1. Open Sanity Studio
2. Go to "Personal Information"
3. Set "Form Submission Endpoint"
4. Publish
5. Done!

---

## 🧪 Testing

### Local Testing (Demo Mode):
- Form currently works in demo mode (shows toast, logs to console)
- No actual emails sent
- Perfect for development

### With Endpoint Configured:
- Real form submissions
- Emails sent to your address
- Production-ready

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Choose form service (Web3Forms recommended)
- [ ] Get API key/endpoint
- [ ] Add `REACT_APP_FORM_ENDPOINT` to Cloudflare Pages environment variables
- [ ] Test form submission
- [ ] Verify emails arrive

---

## 🎨 Customization

### Change Email Template:
Edit the form submission in `/app/frontend/src/components/Contact.jsx`:

```javascript
body: JSON.stringify({
  ...formData,
  to: personalInfo.email,
  subject: `Portfolio Contact from ${formData.name}`,
  // Add custom fields:
  from_name: formData.name,
  reply_to: formData.email,
})
```

### Change Success Message:
```javascript
toast({
  title: "Your custom title!",
  description: "Your custom message...",
});
```

---

## 🔐 Security

- ✅ Form endpoint configurable via environment variables
- ✅ No API keys exposed in code
- ✅ CORS handled by form services
- ✅ Input validation on frontend
- ✅ Rate limiting handled by services

---

## 💡 Recommended Setup for Your Portfolio

**For Quick Launch:**
```
1. Use Web3Forms (5 minutes setup)
2. Add endpoint to Cloudflare Pages env vars
3. Deploy - works immediately!
```

**For Custom Solution:**
```
1. Create Cloudflare Worker
2. Integrate with your email service
3. Full control over email templates
```

---

## 📊 Comparison

| Service | Free Tier | Setup Time | Backend Required |
|---------|-----------|------------|------------------|
| Web3Forms | 250/month | 5 min | No |
| Formspree | 50/month | 5 min | No |
| EmailJS | 200/month | 10 min | No |
| CF Workers | Unlimited* | 30 min | Yes |

*Within Cloudflare's generous limits

---

## 🎯 Next Steps

1. Choose your form service
2. Follow setup guide above
3. Configure environment variables
4. Deploy to Cloudflare Pages
5. Test the form!

---

Need help? Check the service documentation or reach out!

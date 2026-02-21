'use client';

import { useState, useRef } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [sending, setSending] = useState(false);
    const formRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        setStatus(null);

        try {
            const emailjs = (await import('@emailjs/browser')).default;

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            formRef.current.reset();
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        } finally {
            setSending(false);
        }
    }

    return (
        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-field">
                    <label htmlFor="from_name">Name</label>
                    <input type="text" name="from_name" id="from_name" required />
                </div>
                <div className="form-field">
                    <label htmlFor="from_email">Email</label>
                    <input type="email" name="from_email" id="from_email" required />
                </div>
            </div>
            <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="5" required />
            </div>
            <button type="submit" className="form-submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send Message'}
                <Send />
            </button>
            {status === 'success' && (
                <p className="form-status success">
                    Message sent — I&apos;ll be in touch shortly.
                </p>
            )}
            {status === 'error' && (
                <p className="form-status error">
                    Something went wrong. Please email me directly.
                </p>
            )}
        </form>
    );
}

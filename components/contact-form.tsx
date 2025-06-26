"use client"

import type React from "react"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient.js"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formStarted, setFormStarted] = useState(false)

  // Função para disparar o evento form_start (apenas uma vez)
  const handleFormStart = () => {
    if (!formStarted) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_start',
        'form_name': 'contato_proteses',
        'form_location': 'homepage',
        'form_type': 'contact_form',
        'timestamp': new Date().toISOString()
      });
      setFormStarted(true);
      console.log('GTM Event: form_start disparado');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Função para lidar com o foco nos campos (dispara form_start)
  const handleInputFocus = () => {
    handleFormStart();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Disparar evento form_submit ANTES de enviar para o Supabase
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'form_submit',
      'form_name': 'contato_proteses',
      'form_location': 'homepage',
      'form_type': 'contact_form',
      'form_data': {
        'user_name': formData.name,
        'user_email': formData.email,
        'user_phone': formData.phone,
        'user_message': formData.message || 'Não informado'
      },
      'timestamp': new Date().toISOString()
    });
    console.log('GTM Event: form_submit disparado com dados:', formData);

    try {
      // Enviar dados para o Supabase
      const { data, error: supabaseError } = await supabase
        .from("form_submissions")
        .insert([
          {
            name: formData.name, 
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
        ])
        .select()

      if (supabaseError) {
        throw supabaseError
      }

      console.log("Dados enviados com sucesso para o Supabase:", data)

      // Disparar evento form_success após envio bem-sucedido
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_success',
        'form_name': 'contato_proteses',
        'form_location': 'homepage',
        'form_type': 'contact_form',
        'conversion_value': 1,
        'timestamp': new Date().toISOString()
      });
      console.log('GTM Event: form_success disparado');

      // Resetar formulário e mostrar mensagem de sucesso
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setIsSubmitted(true)
      setFormStarted(false) // Reset para permitir novo form_start

    } catch (err: any) {
      // Disparar evento form_error em caso de erro
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_error',
        'form_name': 'contato_proteses',
        'form_location': 'homepage',
        'form_type': 'contact_form',
        'error_message': err?.message || 'Erro desconhecido',
        'timestamp': new Date().toISOString()
      });
      console.log('GTM Event: form_error disparado');

      console.error("Erro detalhado ao enviar para o Supabase:", JSON.stringify(err, null, 2)); 
      console.error("Objeto de erro original:", err);

      const errorMessage = err?.message || (typeof err === 'string' ? err : "Erro desconhecido. Verifique o console para detalhes.");
      setError(
        `Ocorreu um erro ao enviar o formulário: ${errorMessage}`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setFormStarted(false); // Reset para permitir novo form_start
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mensagem enviada com sucesso!</h3>
        <p className="text-gray-600 mb-4">
          Agradecemos seu interesse. Em breve, nossa equipe entrará em contato com você.
        </p>
        <button 
          onClick={handleNewMessage} 
          className="text-emerald-600 underline hover:text-emerald-700"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col md:items-start items-center">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-3 text-sm w-full">{error}</div>
      )}

      <div className="grid grid-cols-1 gap-4 w-full">
        <div className="w-full text-center md:text-left">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleInputFocus}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Seu nome"
          />
        </div>

        <div className="w-full text-center md:text-left">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleInputFocus}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="seu.email@exemplo.com"
          />
        </div>

        <div className="w-full text-center md:text-left">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleInputFocus}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="w-full text-center md:text-left">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensagem (opcional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleInputFocus}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Escreva sua mensagem aqui..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>

      <p className="text-xs text-gray-500 mt-2 text-center md:text-left">* Campos obrigatórios</p>
    </form>
  )
}

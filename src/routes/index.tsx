import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Truck,
  Video,
  MapPin,
  Clock,
  Handshake,
  CheckCircle2,
  MessageCircle,
  FileCheck2,
  ShieldCheck,
  Pickaxe,
  Zap,
  HelpCircle,
  User,
  Building2,
  ClipboardList,
  RefreshCw,
  XCircle,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroTrucker from "@/assets/hero-trucker.jpg";
import elementoCertdigBdk from "@/assets/elemento-certdig-bdk.png";
import truckLoop from "@/assets/carretas-bitrem-v2.mp4";
import logoBodock from "@/assets/logo-tipo-bodock-png-semfundo.png";
import logoLacerdaReis from "@/assets/logo-lacerdaresis-parceiro-semfundo.png";
import logoV9 from "@/assets/logo-v9-parceiro.png";
import gustavoContato from "@/assets/gustavo-contato.png";

const WHATSAPP_URL =
  "https://wa.me/5537999591557?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20motorista.bodockplanet.tec.br%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20Certificado%20Digital.";

const WHATSAPP_LACERDA_REIS_URL =
  "https://wa.me/5537988525276?text=Ol%C3%A1!%20Sou%20cliente%20da%20Contabilidade%20Lacerda%20Reis%20e%20vim%20pela%20p%C3%A1gina%20da%20Bodock%20Planet.%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Certificado%20Digital.";

const WHATSAPP_LACERDA_REIS_CONTADOR_URL =
  "https://wa.me/5537988525276?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20Certificado%20Digital%20da%20Bodock%20Planet%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20contabilidade.";

const WHATSAPP_CIOT_URL =
  "https://wa.me/5537999591557?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20motorista.bodockplanet.tec.br%20e%20quero%20emitir%20meu%20Certificado%20Digital%20para%20CIOT.";

const WHATSAPP_RENOVACAO_URL =
  "https://wa.me/5537999591557?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20motorista.bodockplanet.tec.br%20e%20preciso%20renovar%20meu%20Certificado%20Digital.";

const WHATSAPP_DEV_URL =
  "https://wa.me/5537999591557?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20da%20Bodock%20Planet%20e%20gostaria%20de%20saber%20sobre%20cria%C3%A7%C3%A3o%20de%20landing%20pages.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certificado Digital para Motorista, CIOT e CT-e | Bodock Planet" },
      {
        name: "description",
        content:
          "Emita seu Certificado Digital para CIOT, CT-e, MEI e Transportadores. Atendimento por videoconferência ou presencial em Arcos/MG.",
      },
      { property: "og:site_name", content: "Bodock Planet Tecnologia" },
      { property: "og:url", content: "https://motorista.bodockplanet.tec.br" },
      { property: "og:title", content: "Certificado Digital para Motorista, CIOT e CT-e | Bodock Planet" },
      {
        property: "og:description",
        content:
          "Emita seu Certificado Digital para CIOT, CT-e, MEI e Transportadores. Atendimento por videoconferência ou presencial em Arcos/MG.",
      },
      { property: "og:image", content: heroTrucker },
      { name: "twitter:title", content: "Certificado Digital para Motorista, CIOT e CT-e | Bodock Planet" },
      {
        name: "twitter:description",
        content:
          "Emita seu Certificado Digital para CIOT, CT-e, MEI e Transportadores. Atendimento por videoconferência ou presencial em Arcos/MG.",
      },
      { name: "twitter:image", content: heroTrucker },
    ],
  }),
  component: Landing,
});

const rotatingPrices = [
  "A1 PF Presencial — R$ 100",
  "A1 PF Vídeo — R$ 128",
  "CNPJ Presencial — R$ 158",
  "A1 CNPJ Vídeo — R$ 178",
];

function RotatingPrice() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => setVisible(false), 2500);
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % rotatingPrices.length);
      setVisible(true);
    }, 2500 + 400);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [index]);

  return (
    <span
      className={`block truncate text-xs font-medium text-foreground transition-opacity duration-[400ms] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {rotatingPrices[index]}
    </span>
  );
}

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "glow";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] shadow-soft";
  const styles =
    variant === "primary"
      ? "btn-whatsapp"
      : variant === "glow"
        ? "glow-btn-green border-2 border-secondary bg-transparent text-white hover:bg-secondary/10"
        : "border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="size-5" />
      {children}
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* NAV */}
      <header className="absolute top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <img
              src={logoBodock}
              alt="Bodock Planet Tecnologia"
              className="h-14 w-auto drop-shadow-lg"
            />
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroTrucker}
          alt="Caminhoneiro brasileiro ao lado de carreta carregada na região de Arcos/MG"
          width={1536}
          height={1024}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 gradient-hero opacity-80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-32 pb-24 md:grid-cols-2 md:pt-40 md:pb-32">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
              <MapPin className="size-3.5" /> Arcos / MG · Atendemos toda a região
            </div>
            <div className="mt-5">
              <span className="text-secondary-foreground bg-secondary/90 inline-block rounded-md px-3 py-1 font-display text-2xl font-extrabold sm:text-3xl">
                Certificado Digital
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.15] text-balance sm:text-5xl md:text-6xl">
              Quem move Arcos e região{" "}
              <span className="text-secondary-foreground bg-secondary/90 px-2 pb-1.5 rounded-md inline-block">
                não pode parar.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Caminhão parado é prejuízo. Certificado digital pronto hoje,{" "}
              <strong className="text-white">presencial ou por videoconferência.</strong>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton variant="glow">Quero meu Certificado</WhatsAppButton>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm text-white/85 sm:max-w-md">
              {[
                "Sem burocracia",
                "Atendimento humano",
                "Empresa local",
                "Processo seguro",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-secondary" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick card */}
          <div className="md:justify-self-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-elevated ring-1 ring-black/5">
              <img
                src={elementoCertdigBdk}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-1/2 w-[212px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.11]"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <FileCheck2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold">Resolver agora</div>
                    <div className="text-sm text-muted-foreground">
                      Resposta no WhatsApp em minutos
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { icon: Video, label: "Atendimento por videoconferência" },
                    { icon: MapPin, label: "Atendimento presencial em Arcos/MG" },
                    { icon: Handshake, label: "Parceiro da Contabilidade Lacerda Reis" },
                    { icon: Clock, label: "Sem enrolação, direto ao ponto" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2.5">
                      <Icon className="size-4 text-primary" />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold shadow-soft"
                >
                  <MessageCircle className="size-5" /> Solicitar pelo WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Atendimento real · Sem burocracia · Arcos/MG
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIOT CTA */}
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <div className="grid gap-8 rounded-3xl bg-card p-6 shadow-soft ring-1 ring-black/5 sm:p-8 md:grid-cols-2 md:items-center md:p-10">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">
              Vai emitir CIOT?
            </h2>
            <p className="mt-3 text-muted-foreground">
              O Certificado Digital resolve tudo de uma vez. Emitimos rapidamente por
              videoconferência ou presencial em Arcos/MG.
            </p>

            <div className="mt-6">
              <a
                href={WHATSAPP_CIOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft"
              >
                <MessageCircle className="size-5" /> Emitir pelo WhatsApp
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 text-sm">
            {["CIOT", "CT-e", "MDF-e", "NF-e", "Gov.br", "Receita Federal"].map((t) => (
              <li key={t} className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="size-4 shrink-0 text-secondary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">
            A diferença é simples.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Veja o que muda para quem roda com o certificado em dia.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-destructive/5 p-6 ring-1 ring-destructive/15 sm:p-7">
            <h3 className="font-display text-lg font-bold text-destructive">
              Sem Certificado Digital
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "MDF-e rejeitado automaticamente",
                "CIOT não emitido",
                "Frete perdido",
                "Caminhão parado na fiscalização",
                "Multa de até R$ 550 por viagem sem CIOT",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-medium text-foreground/80">
                  <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-secondary/5 p-6 ring-1 ring-secondary/15 sm:p-7">
            <h3 className="font-display text-lg font-bold text-secondary">
              Com Certificado Digital
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Emite CIOT",
                "Emite CT-e e MDF-e",
                "Acessa Gov.br",
                "Opera sem interrupção",
                "Documentação em dia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-medium text-foreground/80">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y bg-muted/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-sm font-medium text-muted-foreground">
          {[
            "Empresa Local",
            "Atendimento Humano",
            "Sem Burocracia",
            "Processo Seguro",
            "Parceiro Contabilidade Lacerda Reis",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-secondary" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FEITO PARA QUEM VIVE NA ESTRADA */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-secondary">
              <Truck className="size-3.5" /> Para motoristas MEI
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Feito para quem vive na estrada.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atendemos diariamente motoristas que transportam cimento, cal, calcário
              e minério em Arcos/MG e região. Sabemos que um caminhão parado por falta
              de Certificado Digital pode significar perder um frete. Por isso
              oferecemos atendimento rápido, direto e sem burocracia.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Truck, text: "Atendimento especializado para caminhoneiros" },
              { icon: Pickaxe, text: "Especialistas na região das mineradoras" },
              { icon: MapPin, text: "Arcos e cidades vizinhas" },
              { icon: Zap, text: "Emissão rápida" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <span className="text-sm font-medium leading-snug pt-1">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDICAÇÃO LACERDA REIS */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo + texto */}
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-center">
              <div className="flex size-28 shrink-0 items-center justify-center rounded-2xl bg-white/20 p-3 ring-2 ring-white/30 backdrop-blur">
                <img
                  src={logoLacerdaReis}
                  alt="Contabilidade Lacerda Reis"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center text-secondary-foreground md:text-left">
                <div className="text-xs font-semibold uppercase tracking-widest opacity-75">
                  Parceiro Oficial
                </div>
                <div className="mt-1 font-display text-2xl font-bold leading-tight">
                  Contabilidade Lacerda Reis
                </div>
                <div className="mt-1.5 max-w-sm text-sm opacity-85">
                  Cliente da Lacerda Reis? Clique no botão — já saberemos que você veio de confiança e o atendimento será ainda mais ágil.
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_LACERDA_REIS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-secondary shadow-elevated transition-all hover:scale-[1.03] active:scale-[0.99]"
              >
                <MessageCircle className="size-5" /> Sou cliente Lacerda Reis
              </a>
              <a
                href={WHATSAPP_LACERDA_REIS_CONTADOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-[0.99]"
              >
                <MessageCircle className="size-4" /> Preciso de Contador
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICADO */}
      <section id="certificado" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" /> Certificado Digital
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Documento digital com a mesma validade da sua assinatura no papel.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos com Certificado Digital para <strong>Pessoa Física</strong> e{" "}
              <strong>Pessoa Jurídica</strong>, nos modelos A1 e A3, com atendimento{" "}
              <strong>presencial</strong> ou por <strong>videoconferência</strong> — você escolhe o
              que é mais prático.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <CertCard title="Pessoa Física" items={["Modelo A1", "Modelo A3"]} />
              <CertCard title="Pessoa Jurídica" items={["Modelo A1", "Modelo A3"]} />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <MapPin className="size-4 text-primary" /> Presencial
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <Video className="size-4 text-primary" /> Videoconferência
              </div>
            </div>

            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft"
              >
                <MessageCircle className="size-5" /> Solicitar Certificado
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/15 blur-2xl" />
            <video
              autoPlay
              loop
              muted
              playsInline
              src={truckLoop}
              width={1536}
              height={768}
              className="rounded-2xl object-cover shadow-elevated ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-elevated ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-3">
                <Truck className="size-6 text-secondary" />
                <div>
                  <div className="font-display font-bold">Quem está na estrada</div>
                  <div className="text-xs text-muted-foreground">
                    não pode esperar dias por um certificado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREÇOS */}
      <section id="precos" className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              <FileCheck2 className="size-3.5" /> Tabela de Preços
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Certificado A1 — valor justo, sem pegadinha.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Escolha entre presencial ou videoconferência. Validade de 1 ano em todos os modelos.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Atendimento</TableHead>
                  <TableHead>Validade</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingPlans.map((p) => (
                  <TableRow key={`${p.type}-${p.mode}`}>
                    <TableCell className="font-medium">{p.type}</TableCell>
                    <TableCell className="text-muted-foreground">{p.mode}</TableCell>
                    <TableCell className="text-muted-foreground">{p.validity}</TableCell>
                    <TableCell className="text-right font-display font-bold text-primary">
                      {p.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Trabalhamos também com Certificado A3 (validade de até 3 anos) — consulte valores e
            disponibilidade pelo WhatsApp.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft"
            >
              <MessageCircle className="size-5" /> Solicitar Certificado A1
            </a>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS NECESSÁRIOS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
            <ClipboardList className="size-3.5" /> Antes de Agendar
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
            O que você precisa ter em mãos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Separe os documentos abaixo conforme o seu tipo de certificado e agilize o atendimento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {documentChecklists.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-card p-6 shadow-soft ring-1 ring-black/5 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-balance">{c.title}</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 font-medium">
                    <CheckCircle2 className="size-4 shrink-0 text-secondary" /> {item}
                  </li>
                ))}
              </ul>
              {c.note && (
                <p className="mt-5 text-xs text-muted-foreground">{c.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* QUEM VAI TE ATENDER */}
      <section className="mx-auto max-w-xl px-6 py-12 md:py-16">
        <h2 className="text-center font-display text-2xl font-bold text-balance">
          Quem vai te atender
        </h2>

        <div className="mt-6 flex flex-col items-center rounded-3xl bg-card p-8 text-center shadow-soft ring-1 ring-black/5">
          <div
            className="size-20 rounded-full p-[3px] shadow-md"
            style={{ background: "linear-gradient(135deg, #C62828, #2E7D32)" }}
          >
            <div className="size-full overflow-hidden rounded-full bg-white">
              <img
                src={gustavoContato}
                alt="Gustavo Lamounier"
                className="size-full object-cover"
                style={{ objectPosition: "center 12%" }}
              />
            </div>
          </div>
          <h3 className="mt-4 font-display text-lg font-bold">Gustavo Lamounier</h3>
          <p className="text-sm text-muted-foreground">Agente de Registro Autorizado</p>

          <div className="mt-3 flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 ring-1 ring-border">
            <img src={logoV9} alt="V9 Soluções Tecnológicas" className="h-4 w-auto object-contain" />
            <span className="text-xs font-semibold text-muted-foreground">V9 Soluções Tecnológicas</span>
          </div>

          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Atendimento presencial em Arcos/MG e por videoconferência para todo o Brasil.
          </p>
        </div>
      </section>

      {/* PUBLICO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold sm:text-4xl text-balance">
            Quem confia na Bodock Planet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Atendemos quem mantém Arcos e a região rodando — pessoas práticas que precisam de
            respostas claras.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <a.icon className="size-5" />
              </div>
              <div className="mt-4 font-display font-semibold">{a.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24">
        <div className="absolute inset-0 -z-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0.5px, transparent 0.5px), radial-gradient(circle at 80% 60%, white 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-balance">
                Por que escolher a gente?
              </h2>
              <p className="mt-4 max-w-md text-white/85">
                A gente fala igual um bom mecânico de confiança: sem palavra difícil, explicando
                tudo, cumprindo o combinado.
              </p>
              <div className="mt-8">
                <WhatsAppButton>Falar com Especialista</WhatsAppButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {differentials.map((d) => (
                <div
                  key={d}
                  className="flex items-start gap-3 rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span className="text-sm font-medium leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-3xl font-bold sm:text-5xl text-balance">
          Pronto para resolver com quem entende?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Mande sua mensagem agora no WhatsApp. Respondemos como gente — rápido, claro e sem
          enrolação.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold shadow-elevated"
          >
            <MessageCircle className="size-5" /> Solicitar pelo WhatsApp
          </a>
        </div>
      </section>

      {/* RENOVAÇÃO */}
      <section className="mx-auto max-w-xl px-6 py-12 md:py-16">
        <div className="rounded-3xl bg-muted/40 p-8 text-center ring-1 ring-border">
          <div className="flex items-center justify-center gap-2">
            <div className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
              <RefreshCw className="size-4" />
            </div>
            <h2 className="font-display text-xl font-bold text-balance sm:text-2xl">
              Seu certificado está vencendo?
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
            Renove sem complicação direto pelo WhatsApp. Atendimento rápido, sem fila. Aceitamos
            cartão de crédito parcelado — os juros ficam com a operadora, você paga no seu ritmo.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={WHATSAPP_RENOVACAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold shadow-soft"
            >
              <MessageCircle className="size-5" /> Renovar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-secondary">
              <HelpCircle className="size-3.5" /> Dúvidas Frequentes
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Perguntas que todo motorista faz
            </h2>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="font-display text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoBodock}
                  alt="Bodock Planet Tecnologia"
                  className="h-16 w-auto"
                />
                <div>
                  <div className="font-display font-bold">Bodock Planet Tecnologia</div>
                  <div className="text-xs text-muted-foreground">
                    Tecnologia • Certificação Digital • Assistência Técnica
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-0.5 text-xs text-muted-foreground">
                <div>Av. Governador Valadares, nº 171, sala 03 — Galeria Arcos Shopping, Centro · Arcos/MG</div>
                <div>CNPJ: 43.834.782/0001-77</div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-soft"
            >
              <MessageCircle className="size-4" /> Fale no WhatsApp
            </a>
          </div>

          {/* Parceiros */}
          <div className="mt-8 border-t pt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center ring-1 ring-border sm:flex-row sm:text-left">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-border">
                  <img
                    src={logoV9}
                    alt="V9 Soluções Tecnológicas"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Parceiro Técnico Oficial
                  </div>
                  <div className="mt-1 font-display text-lg font-bold">V9 Soluções</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Certificados emitidos com suporte da V9 Soluções, autoridade certificadora
                    credenciada ICP-Brasil.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-6 text-center ring-1 ring-border sm:flex-row sm:text-left">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-white p-3 ring-1 ring-border">
                  <img
                    src={logoLacerdaReis}
                    alt="Contabilidade Lacerda Reis"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Parceiro Indicador Oficial
                  </div>
                  <div className="mt-1 font-display text-lg font-bold">
                    Contabilidade Lacerda Reis
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Parceria de confiança mútua. Precisa de contador em Arcos/MG? Fale com a
                    Lacerda Reis.
                  </p>
                  <a
                    href={WHATSAPP_LACERDA_REIS_CONTADOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-soft"
                  >
                    <MessageCircle className="size-4" /> Falar com a Lacerda Reis
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
              <span>
                © {new Date().getFullYear()} Bodock Planet Tecnologia. Todos os direitos reservados.
              </span>
              <a
                href={WHATSAPP_DEV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Quer uma página como essa?
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTTOM BAR MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t bg-white px-4 py-3.5 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
        <div className="min-w-0 flex-1">
          <RotatingPrice />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold"
        >
          <MessageCircle className="size-4" /> Chamar agora
        </a>
      </div>

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-center gap-2.5 max-md:bottom-24">
        {/* Avatar com anel girando */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Gustavo no WhatsApp"
          className="group"
        >
          <div className="relative size-20">
            {/* Ondas sonar */}
            <span className="avatar-ping-1 absolute inset-0 rounded-full" />
            <span className="avatar-ping-2 absolute inset-0 rounded-full" />
            {/* Anel gradiente girando */}
            <span className="avatar-spin-ring absolute inset-0 rounded-full" />
            {/* Separador branco */}
            <span className="absolute inset-[3px] rounded-full bg-white" />
            {/* Foto */}
            <span className="absolute inset-[5px] rounded-full overflow-hidden shadow-md">
              <img
                src={gustavoContato}
                alt="Gustavo — Bodock Planet"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: "center 12%" }}
              />
            </span>
            {/* Badge WhatsApp */}
            <span className="absolute bottom-0 right-0 z-10 grid size-6 place-items-center rounded-full border-2 border-white bg-[#25D366] shadow-sm">
              <MessageCircle className="size-3.5 text-white" />
            </span>
          </div>
        </a>

        {/* Label online */}
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-md ring-1 ring-black/5">
          <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
          Fale comigo!
        </div>
      </div>
    </div>
  );
}

function CertCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 font-display font-semibold">
        <FileCheck2 className="size-4 text-primary" /> {title}
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-secondary" /> {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

const faqs = [
  {
    q: "Preciso de Certificado Digital para emitir CIOT?",
    a: "Sim. Desde maio de 2026 o CIOT é obrigatório para todas as operações de frete. Sem Certificado Digital você não consegue emitir o CIOT e o MDF-e é rejeitado automaticamente. Caminhão parado na fiscalização.",
  },
  {
    q: "Posso fazer por videoconferência?",
    a: "Sim. Fazemos o atendimento completo por videoconferência, sem você precisar sair do caminhão ou da empresa. Você só precisa de celular ou computador com câmera.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Em média 30 minutos. Você agenda, a gente confirma, e o certificado fica pronto no mesmo dia.",
  },
  {
    q: "Quanto custa?",
    a: "O Certificado A1 começa em R$ 100,00 para Pessoa Física presencial. Por videoconferência a partir de R$ 128,00. Para empresa (CNPJ) a partir de R$ 158,00 presencial ou R$ 178,00 por videoconferência. Validade de 1 ano.",
  },
  {
    q: "O certificado serve para CT-e e MDF-e?",
    a: "Sim. O mesmo certificado serve para emitir CT-e, MDF-e, CIOT e qualquer outro documento fiscal eletrônico.",
  },
  {
    q: "Vale para todo Brasil?",
    a: "Sim. O Certificado Digital ICP-Brasil tem validade nacional. Você emite aqui em Arcos/MG e usa em qualquer estado.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};


const pricingPlans = [
  { type: "e-CPF (Pessoa Física)", mode: "Presencial", validity: "1 ano", price: "R$ 100" },
  { type: "e-CPF (Pessoa Física)", mode: "Videoconferência", validity: "1 ano", price: "R$ 128" },
  { type: "e-CNPJ (Pessoa Jurídica)", mode: "Presencial", validity: "1 ano", price: "R$ 158" },
  { type: "e-CNPJ (Pessoa Jurídica)", mode: "Videoconferência", validity: "1 ano", price: "R$ 178" },
];

const documentChecklists = [
  {
    icon: User,
    title: "MEI Motorista (e-CPF)",
    items: ["CNH válida", "CPF", "Comprovante de endereço", "E-mail válido", "Telefone ativo"],
  },
  {
    icon: Building2,
    title: "Transportadora ou Empresa (e-CNPJ)",
    items: [
      "CNPJ ativo",
      "CCMEI ou Contrato Social",
      "CNH ou RG do responsável",
      "E-mail válido",
      "Telefone ativo",
    ],
    note: "Orientamos sobre documentação complementar no atendimento.",
  },
];

const audiences = [
  { icon: Truck, label: "Caminhoneiros", desc: "Transportadores e motoristas autônomos." },
  { icon: MapPin, label: "Produtores Rurais", desc: "Quem mantém o campo produzindo." },
  { icon: FileCheck2, label: "Contabilidades", desc: "Atendimento ágil para o dia a dia do escritório." },
  { icon: Handshake, label: "Pequenas Empresas", desc: "Comércio, prestadores e profissionais liberais." },
];

const differentials = [
  "Atendimento humanizado",
  "Atendimento rápido",
  "Empresa local em Arcos/MG",
  "Transparência em tudo",
  "Suporte antes e depois da venda",
  "Parceira da Contabilidade Lacerda Reis",
  "Presencial e remoto",
  "Sem enrolação",
];

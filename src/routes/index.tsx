import { createFileRoute } from "@tanstack/react-router";
import {
  Truck,
  Monitor,
  Laptop,
  Wrench,
  HardDrive,
  Video,
  MapPin,
  Clock,
  Handshake,
  CheckCircle2,
  MessageCircle,
  Cpu,
  KeyRound,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import heroTrucker from "@/assets/hero-trucker.jpg";
import trucksFleet from "@/assets/trucks-fleet.jpg";
import techService from "@/assets/tech-service.jpg";
import logoBodock from "@/assets/logo-tipo-bodock-png-semfundo.png";
import logoLacerdaReis from "@/assets/logo-lacerdaresis-parceiro-semfundo.png";
import logoV9 from "@/assets/logo-v9-parceiro.png";
import gustavoContato from "@/assets/gustavo-contato.png";
import iconeWhatsapp from "@/assets/icone-whatsapp (3).png";

const WHATSAPP_URL =
  "https://wa.me/5537000000000?text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20o%20Certificado%20Digital.";

const WHATSAPP_LACERDA_REIS_URL =
  "https://wa.me/5537000000000?text=Ol%C3%A1!%20Vim%20pela%20indica%C3%A7%C3%A3o%20da%20Contabilidade%20Lacerda%20Reis%20e%20quero%20informa%C3%A7%C3%B5es%20sobre%20o%20Certificado%20Digital.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bodock Planet — Certificado Digital em Arcos/MG para quem não pode parar" },
      {
        name: "description",
        content:
          "Certificado Digital A1 e A3, presencial ou por videoconferência, com atendimento rápido em Arcos/MG. Parceiro da Contabilidade Lacerda Reis.",
      },
      { property: "og:title", content: "Bodock Planet — Certificado Digital para quem não pode parar" },
      {
        property: "og:description",
        content:
          "Emita seu Certificado Digital com atendimento humano, rápido e sem burocracia. Caminhoneiros, empresas e produtores rurais.",
      },
      { property: "og:image", content: heroTrucker },
      { name: "twitter:image", content: heroTrucker },
    ],
  }),
  component: Landing,
});

function WhatsAppButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.99] shadow-soft";
  const styles =
    variant === "primary"
      ? "btn-whatsapp"
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
    <div className="min-h-screen bg-background">
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
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl md:text-6xl">
              Certificado Digital para{" "}
              <span className="text-secondary-foreground bg-secondary/90 px-2 rounded-md">
                quem não pode parar.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Emita seu Certificado Digital{" "}
              <strong className="text-white">presencialmente ou por videoconferência</strong> com
              atendimento rápido. Parceiro oficial da{" "}
              <strong className="text-white">Contabilidade Lacerda Reis</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton>Quero meu Certificado</WhatsAppButton>
              <WhatsAppButton variant="outline">Falar com Especialista</WhatsAppButton>
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
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-elevated ring-1 ring-black/5">
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
                Resposta humana · Sem robô · Sem espera
              </p>
            </div>
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

            {/* Botão */}
            <a
              href={WHATSAPP_LACERDA_REIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-secondary shadow-elevated transition-all hover:scale-[1.03] active:scale-[0.99]"
            >
              <MessageCircle className="size-5" /> Sou cliente Lacerda Reis
            </a>
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
            <img
              src={trucksFleet}
              alt="Frota de caminhões bitruck e carretas em pedreira de Arcos/MG"
              loading="lazy"
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

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1.5 text-xs font-semibold text-secondary">
              <Wrench className="size-3.5" /> Assistência Técnica
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-balance">
              Seu computador funcionando como deveria — sem complicação.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atendimento direto, transparente e com linguagem simples. A gente explica o que
              precisa, faz o orçamento honesto e resolve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-black/5">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold">
                  Montagem de PC Gamer e Upgrades
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Monte um PC sob medida pro seu uso: jogos, trabalho ou estudo. Indicamos as peças
                  certas pra o que você precisa — sem empurrar componente caro à toa.
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {[
                    "Indicação honesta de peças",
                    "Upgrade de SSD, memória e placa de vídeo",
                    "Suporte antes e depois da venda",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-secondary" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-soft"
                >
                  <MessageCircle className="size-4" /> Resolver agora
                </a>
              </div>
              <div className="relative min-h-64 md:min-h-full">
                <img
                  src={techService}
                  alt="Técnico realizando manutenção em notebook na loja Bodock Planet em Arcos/MG"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
            </div>
          </div>
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
                <div>Parceiro Oficial da Contabilidade Lacerda Reis · Arcos / MG</div>
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
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center text-xs text-muted-foreground sm:text-left">
                © {new Date().getFullYear()} Bodock Planet Tecnologia. Todos os direitos reservados.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Parceiro Oficial</span>
                <div className="rounded-lg bg-white px-3 py-1.5 ring-1 ring-border">
                  <img
                    src={logoV9}
                    alt="V9 Soluções Tecnológicas"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-center gap-2.5">
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
            {/* Ponto online */}
            <span className="absolute bottom-1 right-1 z-10 size-3.5 rounded-full bg-green-400 ring-2 ring-white" />
          </div>
        </a>

        {/* Label online */}
        <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-md ring-1 ring-black/5">
          <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
          Fale comigo!
        </div>

        {/* Botão WhatsApp pulsando */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="wapp-pulse-btn block size-14 overflow-hidden rounded-full shadow-elevated"
        >
          <img src={iconeWhatsapp} alt="WhatsApp" className="size-full object-cover" />
        </a>
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

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="grid size-12 place-items-center rounded-xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

const services = [
  { icon: Monitor, title: "Manutenção de Computadores", desc: "Diagnóstico honesto e conserto sem dor de cabeça." },
  { icon: Laptop, title: "Manutenção de Notebook", desc: "Troca de tela, teclado, bateria e reparos em geral." },
  { icon: Cpu, title: "Montagem de PC Gamer", desc: "Setup personalizado pro seu uso e orçamento." },
  { icon: HardDrive, title: "Upgrade e Troca de SSD", desc: "Seu computador muito mais rápido em poucas horas." },
  { icon: Wrench, title: "Formatação e Windows", desc: "Instalação limpa, programas essenciais e backup." },
  { icon: KeyRound, title: "Backup e Suporte", desc: "Seus dados protegidos e suporte sempre que precisar." },
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

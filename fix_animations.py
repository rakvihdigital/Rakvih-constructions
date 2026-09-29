import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Services Section
content = content.replace('''          <section id="services" className="py-12 md:py-16 bg-gray-50 text-dark-bg relative overflow-hidden">
            <FadeIn direction="left">
              <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">''',
'''          <section id="services" className="py-12 md:py-16 bg-gray-50 text-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">''')

content = content.replace('''                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">''',
'''                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">''')

content = content.replace('''                    ))}
                  </div>
              </div>
            </FadeIn>
          </section>''',
'''                    ))}
                  </div>
              </FadeIn>
            </div>
          </section>''')

# 2. Projects Section
content = content.replace('''          <section className="py-12 md:py-16 bg-dark-bg border-t border-white/5" id="projects">
            <FadeIn direction="right">
              <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-12 mb-16">
                <div className="w-full md:w-1/3">''',
'''          <section className="py-12 md:py-16 bg-dark-bg border-t border-white/5" id="projects">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row gap-12 mb-16">
                <FadeIn direction="left" className="w-full md:w-1/3">
                  <div>''')

content = content.replace('''                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">''',
'''                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={200} className="w-full md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">''')

content = content.replace('''                    </div>
                  ))}
                </div>
              </div>
            </div>
            </FadeIn>
          </section>''',
'''                    </div>
                  ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>''')

# 3. Process Section
content = content.replace('''          {/* Process Section */}
          <section id="process" className="py-12 md:py-16 bg-white text-dark-bg overflow-hidden">
            <FadeIn direction="left">
              <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-16">''',
'''          {/* Process Section */}
          <section id="process" className="py-12 md:py-16 bg-white text-dark-bg overflow-hidden">
            <div className="container mx-auto px-6">
              <FadeIn direction="left">
                <div className="flex justify-between items-end mb-16">''')

content = content.replace('''                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">''',
'''                  <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">''')

content = content.replace('''                    </div>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </section>''',
'''                    </div>
                  </div>
                ))}
                </div>
              </FadeIn>
            </div>
          </section>''')

# 4. About Section
content = content.replace('''            <FadeIn direction="right">
              <div className="container mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>''',
'''            <div className="container mx-auto px-6 relative z-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <FadeIn direction="left">
                  <div>''')

content = content.replace('''                  <Link href="#sustainability" className="bg-gold text-dark-bg px-6 py-3 inline-flex items-center gap-2 font-semibold hover:bg-gold-light transition-colors text-sm uppercase tracking-wider">
                    OUR COMMITMENT
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">''',
'''                  <Link href="#sustainability" className="bg-gold text-dark-bg px-6 py-3 inline-flex items-center gap-2 font-semibold hover:bg-gold-light transition-colors text-sm uppercase tracking-wider">
                    OUR COMMITMENT
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={200}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">''')

content = content.replace('''                    </div>
                  </div>
                </div>
              </div>
            </div>
            </FadeIn>
          </section>''',
'''                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>''')


# 5. Testimonials Section
content = content.replace('''          {/* Testimonials & Clients */}
          <section className="py-12 md:py-16 bg-white text-dark-bg">
            <FadeIn direction="left">
              <div className="container mx-auto px-6">
              <div className="text-center mb-16">''',
'''          {/* Testimonials & Clients */}
          <section className="py-12 md:py-16 bg-white text-dark-bg">
            <div className="container mx-auto px-6">
              <FadeIn direction="up">
                <div className="text-center mb-16">''')

content = content.replace('''                </h2>
              </div>

              <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 border border-gray-100 rounded-lg relative">''',
'''                </h2>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-12 border border-gray-100 rounded-lg relative">''')

content = content.replace('''                </div>
              </div>

              {/* Client Logos (Placeholder) */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-20 opacity-50 grayscale">''',
'''                </div>
                </div>
              </FadeIn>

              {/* Client Logos (Placeholder) */}
              <FadeIn direction="up" delay={400}>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-20 opacity-50 grayscale">''')

content = content.replace('''                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </section>''',
'''                  </div>
                ))}
                </div>
              </FadeIn>
            </div>
          </section>''')


# 6. Insights Section
content = content.replace('''          {/* Insights Section */}
          <section id="insights" className="py-12 md:py-16 bg-dark-bg text-white border-t border-white/5">
            <FadeIn direction="right">
              <div className="container mx-auto px-6">
              <div className="flex justify-between items-end mb-16">''',
'''          {/* Insights Section */}
          <section id="insights" className="py-12 md:py-16 bg-dark-bg text-white border-t border-white/5">
            <div className="container mx-auto px-6">
              <FadeIn direction="right">
                <div className="flex justify-between items-end mb-16">''')

content = content.replace('''                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">''',
'''                  <ArrowRight className="w-4 h-4" />
                </Link>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">''')

content = content.replace('''                    </div>
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </section>''',
'''                    </div>
                  </div>
                ))}
                </div>
              </FadeIn>
            </div>
          </section>''')


# 7. Contact Section
content = content.replace('''          <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] grayscale">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="Background" fill className="object-cover" />
            </div>
            <FadeIn direction="left">
              <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 border border-gray-100 shadow-2xl p-12 md:p-16">
              <div>''',
'''          <section id="contact" className="py-16 md:py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] grayscale">
              <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="Background" fill className="object-cover" />
            </div>
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 border border-gray-100 shadow-2xl p-12 md:p-16">
              <FadeIn direction="left" className="flex-1">
                <div>''')

content = content.replace('''                </p>
              </div>
              <Link href="/contact" className="bg-dark-bg text-white px-8 py-5 whitespace-nowrap font-semibold hover:bg-gold hover:text-dark-bg transition-all text-sm uppercase tracking-wider flex items-center gap-2">''',
'''                </p>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={200}>
                <Link href="/contact" className="bg-dark-bg text-white px-8 py-5 whitespace-nowrap font-semibold hover:bg-gold hover:text-dark-bg transition-all text-sm uppercase tracking-wider flex items-center gap-2">''')

content = content.replace('''                GET A FREE CONSULTATION
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            </FadeIn>
          </section>''',
'''                GET A FREE CONSULTATION
                <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>
            </div>
          </section>''')


with open('src/app/page.tsx', 'w') as f:
    f.write(content)


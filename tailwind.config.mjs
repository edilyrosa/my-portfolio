// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: ["class"],
//     content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	extend: {
//   		screens: {
//   			xs: '500px',
//   			s: '380px'
//   		},
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			'custom-blue': '#06c0ce',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		},
//   		perspective: {
//   			'500': '500px'
//   		},
//   		rotate: {
//   			'10': '10deg'
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		keyframes: {
//   			marquee: {
//   				from: {
//   					transform: 'translateX(0)'
//   				},
//   				to: {
//   					transform: 'translateX(calc(-100% - var(--gap)))'
//   				}
//   			},
//   			'marquee-vertical': {
//   				from: {
//   					transform: 'translateY(0)'
//   				},
//   				to: {
//   					transform: 'translateY(calc(-100% - var(--gap)))'
//   				}
//   			}
//   		},
//   		animation: {
//   			marquee: 'marquee var(--duration) infinite linear',
//   			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };





/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  "*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		screens: {
		  xs: "500px",
		  s: "380px",
		},
		colors: {
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  "custom-blue": "#06c0ce",
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
		  },
		},
		perspective: {
		  500: "500px",
		  1000: "1000px",
		},
		rotate: {
		  10: "10deg",
		  20: "20deg",
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  marquee: {
			"0%": { transform: "translateX(0)" },
			"100%": { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  "marquee-vertical": {
			"0%": { transform: "translateY(0)" },
			"100%": { transform: "translateY(calc(-100% - var(--gap)))" },
		  },
		},
		animation: {
		  marquee: "marquee var(--duration) linear infinite",
		  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  